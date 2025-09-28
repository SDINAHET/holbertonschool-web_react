// task_3/dashboard/src/Notifications.spec.js
import React from "react";
import { render, screen, fireEvent, within, cleanup } from "@testing-library/react";
import Notifications from "./Notifications";

// Nettoyage et reset des mocks après chaque test
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("Notifications component (Task 7)", () => {
  test("renders the notifications title (case-insensitive)", () => {
    render(<Notifications />);
    // Ignore la casse
    const title = screen.getByText(/here is the list of notifications/i);
    expect(title).toBeInTheDocument();
  });

  test("contains a Close button inside the notifications container", () => {
    const { container } = render(<Notifications />);
    const panel = container.querySelector(".Notifications");
    expect(panel).toBeTruthy();

    // Bouton avec aria-label="Close" (recherche insensible à la casse)
    const closeBtn = screen.getByRole("button", { name: /close/i });
    // S'assure que le bouton est bien dans le container .Notifications
    expect(within(panel).getByRole("button", { name: /close/i })).toBe(closeBtn);
  });

  test("renders exactly 3 list items as notifications", () => {
    render(<Notifications />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
  });

  test("clicking the Close button logs the expected message", () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    render(<Notifications />);

    const closeBtn = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeBtn);

    expect(logSpy).toHaveBeenCalledWith("Close button has been clicked");
  });
});
