import React from "react";
import { render, screen, within } from "@testing-library/react";
// import App from "./App/App.jsx";
import App from "./App.jsx";

describe("Static images (logo + close button)", () => {
  test("renders the Holberton logo image", () => {
    render(<App />);
    const logo = screen.getByRole("img", { name: /holberton logo/i });
    expect(logo).toBeInTheDocument();
    // make sure a real src is set (Vite will resolve to something like /assets/holberton-logo-*.jpg)
    expect(logo.getAttribute("src") || "").not.toEqual("");
  });

  test("renders the Close button image inside the Notifications close button", () => {
    render(<App />);
    const closeBtn = screen.getByRole("button", { name: /close/i });
    const closeImg = within(closeBtn).getByRole("img", { name: /close/i }); // alt: "close" or "close button"
    expect(closeImg).toBeInTheDocument();
    expect(closeImg.getAttribute("src") || "").not.toEqual("");
  });
});
