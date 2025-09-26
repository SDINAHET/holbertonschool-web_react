// react_intro/task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders the notifications title (case-insensitive)', () => {
    render(<Notifications />);
    // Vérifie que le texte exact est présent, insensible à la casse
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test('renders the Close button', () => {
    render(<Notifications />);
    // Vérifie que le bouton existe et porte le nom ou aria-label "Close"
    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();
  });

  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    // Vérifie que la liste existe et qu'elle contient exactement 3 éléments <li>
    const list = screen.getByRole('list');
    const items = within(list).getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });

  test('clicking the Close button logs the expected message', () => {
    // Mock console.log uniquement pour ce test
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);
    const button = screen.getByRole('button', { name: /close/i });
    // Simule le clic comme demandé avec fireEvent
    fireEvent.click(button);
    // Vérifie le message exact attendu
    expect(spy).toHaveBeenCalledWith('Close button has been clicked');
    spy.mockRestore(); // Nettoyage
  });
});
