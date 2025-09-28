// task_3/dashboard/src/Notifications.spec.js
import React from "react";
import { render, screen, fireEvent, within, cleanup } from "@testing-library/react";
import Notifications from "./Notifications";

// --- Mocks pour éviter les soucis d'import d'assets/CSS sous Jest ---
jest.mock("./assets/close-icon.png", () => "close-icon.png");
jest.mock("./Notifications.css", () => ({}), { virtual: true });

// Nettoyage et reset des mocks après chaque test
afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
});

describe("Notifications component (Task 7)", () => {
  test("renders the notifications title (case-insensitive)", () => {
    render(<Notifications />);
    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test("contains a Close button inside the notifications container", () => {
    const { container } = render(<Notifications />);
    const panel = container.querySelector(".Notifications");
    expect(panel).toBeTruthy();

    // Bouton avec aria-label="Close" (ignore case)
    const closeBtn = screen.getByRole("button", { name: /close/i });
    expect(within(panel).getByRole("button", { name: /close/i })).toBe(closeBtn);
  });

  test("renders exactly 3 list items as notifications", () => {
    render(<Notifications />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
  });

  test("clicking the Close button logs the expected message", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    render(<Notifications />);
    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(logSpy).toHaveBeenCalledWith("Close button has been clicked");
  });
});
