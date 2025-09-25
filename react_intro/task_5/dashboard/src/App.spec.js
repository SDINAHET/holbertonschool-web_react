// react_intro/task_2/dashboard/src/App.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App (Task 2) - sign in form', () => {
  test('renders two input elements (email and password)', () => {
    const { container } = render(<App />);

    // Cible par label (insensible à la casse)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    // Vérifie qu’il y a exactement 2 <input>
    expect(container.querySelectorAll('input')).toHaveLength(2);
  });

  test('renders two labels with texts "Email" and "Password"', () => {
    render(<App />);
    expect(screen.getByText(/email/i).tagName).toBe('LABEL');
    expect(screen.getByText(/password/i).tagName).toBe('LABEL');
  });

  test('renders a button with text OK', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });
});
