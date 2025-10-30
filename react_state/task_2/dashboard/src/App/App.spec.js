// src/App/App.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/** project reac_props **/
/** Task 2 checks (sign-in form) */
describe('App (Task 2) - sign in form', () => {
  // test('renders two input elements (email and password)', () => {
  //   const { container } = render(<App isLoggedIn={false} />);
  //   expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  //   expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  //   expect(container.querySelectorAll('input')).toHaveLength(2);
  // });
    test('renders two input elements (email and password)', () => {
    const { container } = render(<App isLoggedIn={false} />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(
      container.querySelectorAll('input[type="email"], input[type="password"]')
    ).toHaveLength(2);
  });

  test('renders two labels with texts "Email" and "Password"', () => {
    render(<App isLoggedIn={false} />);
    expect(screen.getByText(/email/i).tagName).toBe('LABEL');
    expect(screen.getByText(/password/i).tagName).toBe('LABEL');
  });

  test('renders a button with text OK', () => {
    render(<App isLoggedIn={false} />);
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });
});

/** project reac_props **/
/** Task 4 checks (conditional rendering) */
describe('App (Task 4)', () => {
  test('renders Login when isLoggedIn is false', () => {
    const { container } = render(<App isLoggedIn={false} />);
    // Login form visible
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    // CourseList not rendered
    expect(container.querySelector('#CourseList')).toBeNull();
  });

  test('renders CourseList when isLoggedIn is true', () => {
    const { container } = render(<App isLoggedIn />);
    // CourseList table present
    expect(container.querySelector('#CourseList')).not.toBeNull();
    // Login form not visible
    expect(screen.queryByLabelText(/email/i)).toBeNull();
    expect(screen.queryByLabelText(/password/i)).toBeNull();
  });
});

/** project react_component **/
/** Task 1 checks (lifecycle & keyboard) */
describe('App (Task 1) - lifecycle & keyboard', () => {
  let alertSpy;

  beforeEach(() => {
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    alertSpy.mockRestore();
  });

  test('calls logOut once when Ctrl+H is pressed', () => {
    const logOut = jest.fn();
    render(<App logOut={logOut} />);
    fireEvent.keyDown(document, { key: 'h', ctrlKey: true });
    expect(logOut).toHaveBeenCalledTimes(1);
  });

  test('alerts "Logging you out" when Ctrl+H is pressed', () => {
    render(<App />);
    fireEvent.keyDown(document, { key: 'h', ctrlKey: true });
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });

  /** project reac_props **/
  /** Task 4 checks (conditional rendering) */
  describe('App (Task 4) - conditional rendering', () => {
    test('renders Login when isLoggedIn is false', () => {
      const { container } = render(<App isLoggedIn={false} />);
      // Login form visible
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
      // CourseList not rendered
      expect(container.querySelector('#CourseList')).toBeNull();
    });

    test('renders CourseList when isLoggedIn is true', () => {
      const { container } = render(<App isLoggedIn />);
      // CourseList table present
      expect(container.querySelector('#CourseList')).not.toBeNull();
      // Login form not visible
      expect(screen.queryByLabelText(/email/i)).toBeNull();
      expect(screen.queryByLabelText(/password/i)).toBeNull();
    });

    test('displays "News from the School" block with its paragraph by default', () => {
      render(<App />); // isLoggedIn false par défaut
      // h2 rendu par BodySection
      expect(
        screen.getByRole('heading', { level: 2, name: /News from the School/i })
      ).toBeInTheDocument();
      // paragraphe demandé
      expect(screen.getByText(/Holberton School News goes here/i)).toBeInTheDocument();
    });
  });
});

/** Task 0 checks (notifications drawer state) */
describe('App (Task 0) - notifications drawer state', () => {
  test('clicking "Your notifications" opens the drawer (state -> true)', () => {
    render(<App />);
    // Le titre/menu "Your notifications" existe même drawer fermé
    const menuItem = screen.getByTestId('notifications-title');
    fireEvent.click(menuItem);
    // Drawer ouvert => le titre de la liste apparaît
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
  });

  test('clicking close button hides the drawer (state -> false)', () => {
    render(<App />);
    // Ouvrir d’abord
    fireEvent.click(screen.getByTestId('notifications-title'));
    // Puis fermer via le bouton close
    const closeBtn = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeBtn);
    // Drawer fermé => le titre de liste disparaît
    expect(screen.queryByText(/Here is the list of notifications/i)).not.toBeInTheDocument();
  });

/** Task 2 checks (Context-based login) */
describe('App (Task 2) - Context login behavior', () => {
  test('updates user state and displays CourseList after successful login', () => {
    const { container } = render(<App />);

    // Avant login : le formulaire est visible, pas la liste des cours
    const emailInput = screen.getByLabelText(/email/i);
    const pwdInput = screen.getByLabelText(/password/i);
    const submit = screen.getByRole('button', { name: /ok/i });

    expect(emailInput).toBeInTheDocument();
    expect(pwdInput).toBeInTheDocument();
    expect(submit).toBeDisabled();

    // Remplir le formulaire avec des valeurs valides
    fireEvent.change(emailInput, { target: { value: 'user@test.com' } });
    fireEvent.change(pwdInput, { target: { value: 'longpass' } });
    expect(submit).toBeEnabled();

    // Soumettre le formulaire
    fireEvent.click(submit);

    // Après login : le formulaire disparaît et CourseList est rendu
    expect(container.querySelector('#CourseList')).not.toBeNull();
    expect(screen.queryByLabelText(/email/i)).toBeNull();
    expect(screen.queryByLabelText(/password/i)).toBeNull();
  });
});
});
