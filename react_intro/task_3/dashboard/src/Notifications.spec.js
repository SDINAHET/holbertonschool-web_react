// react_intro/task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications'; // adapte le chemin si besoin

describe('Notifications', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('shows the notifications title', () => {
    render(<Notifications />);
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test('contains a close button', () => {
    render(<Notifications />);
    expect(
      screen.getByRole('button', { name: /close/i })
    ).toBeInTheDocument();
  });

  test('renders 3 notifications (li elements)', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('logs when the close button is clicked', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(spy).toHaveBeenCalledWith('Close button has been clicked');
  });
});
