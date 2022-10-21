import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./counter";
import "@testing-library/jest-dom";
import regex from "pages/regex";

describe(" Counter comp - ", () => {
  it(" renders with no errors ", () => {
    render(<Counter />);
    expect(1).toBe(1);
  });

  it(" renders count: 0", () => {
    render(<Counter />);
    const el = screen.queryByText(/count.*\d+/i);
    expect(el).toBeTruthy();
    expect(el.textContent).toMatch(/0/);
  });

  it(" renders + button  ", () => {
    render(<Counter />);
    const el = screen.queryByRole("button", {
      name: /\+/,
    });
    // screen.queryByText(/|+/, { selector: "button" });
    expect(el).toBeTruthy();
  });

  it(" click count button increases count  ", async () => {
    render(<Counter />);
    const count = screen.getByTestId("count");
    const button = screen.getByText(/\+/, { selector: "button" });
    await fireEvent.click(button);
    expect(count.textContent).toMatch(/1/);
  });

  it(" click count button x times increases count  ", async () => {
    render(<Counter />);
    const count = screen.getByTestId("count");
    const button = screen.getByText(/\+/, { selector: "button" });
    const r = Math.floor(1 + Math.random() * 10);
    for (let x = 0; x < r; x++) {
      await fireEvent.click(button);
    }
    const regex = new RegExp(`${r}`);
    expect(count.textContent).toMatch(regex);
  });
});
