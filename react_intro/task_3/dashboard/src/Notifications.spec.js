// react_intro/task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

describe('Notifications', () => {
  const ORIGINAL_LOG = console.log;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    console.log = ORIGINAL_LOG;
  });

  test('renders the notifications title (case-insensitive)', () => {
    render(<Notifications />);
    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test('renders the Close button', () => {
    render(<Notifications />);
    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();
  });

  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });

  test('clicking the Close button logs the expected message', () => {
    render(<Notifications />);
    const button = screen.getByRole('button', { name: /close/i });
    fireEvent.click(button);
    expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
  });
});
