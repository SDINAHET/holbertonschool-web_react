// react_intro/task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders the notifications title (case-insensitive)', () => {
    render(<Notifications />);
    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test('renders the Close button', () => {
    render(<Notifications />);
    // Bouton accessible par son nom/aria-label (insensible à la casse)
    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();
    // L’icône de fermeture est présente (alt insensible à la casse)
    expect(screen.getByAltText(/close/i)).toBeInTheDocument();
  });

  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    const list = screen.getByRole('list');
    const items = within(list).getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });

  // >>> Ce test couvre "all the required elements" en ignorant la casse
  test('renders all required notification texts (case-insensitive)', () => {
    render(<Notifications />);
    // Les deux notifications en clair
    expect(screen.getByText(/new course available/i)).toBeInTheDocument();
    expect(screen.getByText(/new resume available/i)).toBeInTheDocument();
    // La notification injectée en HTML (getLatestNotification)
    // "<strong>Urgent requirement</strong> - complete by EOD"
    expect(screen.getByText(/urgent requirement/i)).toBeInTheDocument();
  });

  test('clicking the Close button logs the expected message', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);
    const button = screen.getByRole('button', { name: /close/i });
    fireEvent.click(button);
    expect(logSpy).toHaveBeenCalledWith('Close button has been clicked');
    logSpy.mockRestore();
  });
});
