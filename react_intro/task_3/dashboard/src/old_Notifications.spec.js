import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('shows the notifications title (ignore case)', () => {
    render(<Notifications />);
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
  });

  it('has a Close button (ignore case)', () => {
    render(<Notifications />);
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  it('renders 3 notifications', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('logs on Close click', () => {
    const spy = jest.spyOn(global.console, 'log').mockImplementation(() => {});
    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(spy).toHaveBeenCalledWith("Close button has been clicked");
    spy.mockRestore();
  });
});
