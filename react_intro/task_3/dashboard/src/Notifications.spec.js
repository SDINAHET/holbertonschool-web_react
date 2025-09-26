// react_intro/task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

describe('Notifications', () => {
  // 1) Titre + bouton dans UN SEUL test, insensible à la casse
  test('renders all the required elements (case-insensitive)', () => {
    render(<Notifications />);
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  // 2) Compte exactement 3 <li> dans la liste
  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    const list = screen.getByRole('list');
    const items = within(list).getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });

  // 3) Clic sur Close -> log exact
  test('clicking the Close button logs the expected message', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);
    const button = screen.getByRole('button', { name: /close/i });
    fireEvent.click(button);
    expect(logSpy).toHaveBeenCalledWith('Close button has been clicked');
    logSpy.mockRestore();
  });
});
