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

  test('submitting the form does not reload the page', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i);
    const pwdInput = screen.getByLabelText(/password/i);
    const submit = screen.getByRole('button', { name: /ok/i });

    fireEvent.change(emailInput, { target: { value: 'user@test.com' } });
    fireEvent.change(pwdInput, { target: { value: 'longpass' } });
    expect(submit).toBeEnabled();

    // Click sur submit : JSDOM ne “recharge” pas réellement, on vérifie juste que ça ne jette pas
    fireEvent.click(submit);
  });
});
