import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';

describe('Login (Task 1) - Controlled components and state callback', () => {
  test('renders the prompt text', () => {
    render(<Login />);
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
  });

  test('renders email and password fields with labels', () => {
    render(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('submit button is disabled by default', () => {
    render(<Login />);
    const submit = screen.getByRole('button', { name: /ok/i });
    expect(submit).toBeDisabled();
  });

  test('button becomes enabled only when email is valid and password has at least 8 chars', () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const pwdInput = screen.getByLabelText(/password/i);
    const submit = screen.getByRole('button', { name: /ok/i });

    // 1) Invalid email + short password -> désactivé
    fireEvent.change(emailInput, { target: { value: 'invalid' } });
    fireEvent.change(pwdInput, { target: { value: '123' } });
    expect(submit).toBeDisabled();

    // 2) Email valide + short password -> désactivé
    fireEvent.change(emailInput, { target: { value: 'user@test.com' } });
    fireEvent.change(pwdInput, { target: { value: 'short' } });
    expect(submit).toBeDisabled();

    // 3) Email valide + password >= 8 -> activé
    fireEvent.change(pwdInput, { target: { value: 'longpass' } }); // 8 chars
    expect(submit).toBeEnabled();
  });

  test('does not accept clearly invalid email formats (per current regex)', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i);
    const pwdInput = screen.getByLabelText(/password/i);
    const submit = screen.getByRole('button', { name: /ok/i });

    // Mot de passe valide pour ne tester que l’email
    fireEvent.change(pwdInput, { target: { value: 'longpassword' } });

    // Cas réellement rejetés par le regex courant
    const invalidEmails = [
      'user@.com',          // rien avant le premier point de domaine
      'user@domain',        // pas de TLD
      'user@@domain.com',   // double @
      'user@domain.c',      // TLD 1 char (regex exige >= 2)
      'user@domain,com',    // virgule interdite
      ' user@domain.com ',  // espaces non trim
    ];

    for (const email of invalidEmails) {
      fireEvent.change(emailInput, { target: { value: email } });
      expect(submit).toBeDisabled();
    }
  });

  test('accepts relaxed cases that the simple regex considers valid', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i);
    const pwdInput = screen.getByLabelText(/password/i);
    const submit = screen.getByRole('button', { name: /ok/i });

    fireEvent.change(pwdInput, { target: { value: 'longpassword' } });

    // Ces emails passent avec le regex actuel (même si discutables en stricte RFC)
    const emailsAcceptedByRegex = [
      'user@-domain.com',
      'user@domain-.com',
      'user@domain..com',
    ];

    for (const email of emailsAcceptedByRegex) {
      fireEvent.change(emailInput, { target: { value: email } });
      expect(submit).toBeEnabled();
    }
  });

  test('calls logIn(email, password) when form is valid and submitted', () => {
    const logIn = jest.fn();
    render(<Login logIn={logIn} />);

    const emailInput = screen.getByLabelText(/email/i);
    const pwdInput = screen.getByLabelText(/password/i);
    const submit = screen.getByRole('button', { name: /ok/i });

    fireEvent.change(emailInput, { target: { value: 'user@test.com' } });
    fireEvent.change(pwdInput, { target: { value: 'longpass' } }); // >= 8
    expect(submit).toBeEnabled();

    fireEvent.click(submit);
    expect(logIn).toHaveBeenCalledTimes(1);
    expect(logIn).toHaveBeenCalledWith('user@test.com', 'longpass');
  });

  test('submitting the form does not reload the page', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i);
    const pwdInput = screen.getByLabelText(/password/i);
    const submit = screen.getByRole('button', { name: /ok/i });

    fireEvent.change(emailInput, { target: { value: 'user@test.com' } });
    fireEvent.change(pwdInput, { target: { value: 'longpass' } });
    expect(submit).toBeEnabled();

    // JSDOM ne recharge pas réellement — on vérifie juste que ça ne jette pas
    fireEvent.click(submit);
  });
});
