import { render, screen } from "@testing-library/react";
import Page from "./index";
import "@testing-library/jest-dom";

describe(" Testing page - ", () => {
  test(" hello (test) world", () => {
    expect(1).toBe(1);
  });

  it(" renders <main> ", () => {
    render(<Page />);
    const main = screen.queryByRole("main");
    expect(main).toBeInTheDocument();
  });

  it(" renders <h1>Test</h1>  ", () => {
    render(<Page />);
    const el = screen.queryByRole("heading", {
      level: 1,
      name: "Test",
    });
    expect(el).toBeInTheDocument();
  });

  it(" renders 'lorem ipsum' (somewhere) ", () => {
    render(<Page />);
    const el = screen.queryByText(/lorem ipsum/i);
    expect(el).toBeInTheDocument();
  });

  it(" renders login link ", () => {
    render(<Page />);
    const el = screen.queryByRole("link", { name: "Login" });
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute("href", "/login");
  });
});
