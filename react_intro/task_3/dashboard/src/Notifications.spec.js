// react_intro/task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

describe('Notifications', () => {
  // 1) Titre + bouton (dans le même test) — queries insensibles à la casse
  test('renders all the required elements and ignores case', () => {
    render(<Notifications />);

    // Titre : tolère espaces multiples et singulier/pluriel
    const title = screen.queryByText(/here\s+is\s+the\s+list\s+of\s+notifications?/i);
    expect(title).toBeInTheDocument();

    // Bouton Close : couvert si le nom vient de aria-label, du texte, ou de l'alt de l'image
    const closeBtn =
      screen.queryByRole('button', { name: /close/i }) ||
      screen.queryByLabelText(/close/i) ||
      (screen.queryByAltText(/close/i)?.closest('button') ?? null);

    expect(closeBtn).toBeInTheDocument();
  });

  // 2) 3 <li> rendus
  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });

  // 3) Clic -> console.log exact
  test('clicking the Close button logs the expected message', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);
    const button =
      screen.queryByRole('button', { name: /close/i }) ||
      screen.queryByLabelText(/close/i) ||
      (screen.queryByAltText(/close/i)?.closest('button') ?? null);

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(logSpy).toHaveBeenCalledWith('Close button has been clicked');
    logSpy.mockRestore();
  });
});
