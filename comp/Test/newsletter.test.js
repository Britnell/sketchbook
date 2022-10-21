import { render, screen } from "@testing-library/react";
import Newsletter from "./newsletter";
import "@testing-library/jest-dom";

describe(" Testing Newsletter comp - ", () => {
  it(" renders with no errors ", () => {
    render(<Newsletter />);
    expect(1).toBe(1);
  });

  it(" renders 'email' input field ", () => {
    const { container } = render(<Newsletter />);
    const el = container.querySelector(`input[name="email"]`);
    expect(el).toBeTruthy();
  });

  it(" renders 'email' input w label ", () => {
    render(<Newsletter />);
    const el = screen.queryByLabelText(/email/i);
    expect(el).toBeInTheDocument();
  });

  it(" renders 'password' input w label ", () => {
    render(<Newsletter />);
    const el = screen.queryByLabelText(/password/i);
    expect(el).toBeInTheDocument();
  });

  it(" renders submit button ", () => {
    render(<Newsletter />);
    const el = screen.queryByRole("button", { name: /sign up/i });
    expect(el).toBeInTheDocument();
  });

  // * Attribute data-testid="name"
  // queryByTestId === container.querySelector(`[data-testid="xxx"]`)

  it(" renders email input ", () => {
    render(<Newsletter />);
    const el = screen.queryByTestId("emailinput");
    expect(el).toBeInTheDocument();
  });

  it(" renders password input ", () => {
    render(<Newsletter />);
    const el = screen.queryByTestId("passwordinput");
    expect(el).toBeInTheDocument();
  });

  it(" renders submitbutton ", () => {
    render(<Newsletter />);
    const el = screen.queryByTestId("submitbutton");
    expect(el).toBeInTheDocument();
  });
});
