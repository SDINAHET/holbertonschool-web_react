import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders the notifications title', () => {
    render(<Notifications />);
    const title = screen.getByText(/Here is the list of notifications/i);
    expect(title).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  test('renders 3 list items', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  // test('logs message when close button is clicked', () => {
  //   const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
  //   render(<Notifications />);
  //   const closeButton = screen.getByRole('button', { name: /close/i });
  //   fireEvent.click(closeButton);
  //   expect(spy).toHaveBeenCalledWith('Close button has been clicked');
  // });
});
