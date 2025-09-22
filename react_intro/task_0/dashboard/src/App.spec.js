// task_0/dashboard/src/App.spec.js
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App (Task 0)', () => {
  test('renders the <h1> with text "School dashboard"', () => {
    render(<App />);
    // Un seul query qui vérifie à la fois l’élément et son libellé (insensible à la casse)
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /school dashboard/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test('renders body and footer texts in the right sections', () => {
    render(<App />);

    // Texte du body
    const bodyP = screen.getByText(/login to access the full dashboard/i);
    expect(bodyP).toBeInTheDocument();
    // Vérifie que ce <p> est bien dans le conteneur .App-body
    expect(bodyP.closest('.App-body')).not.toBeNull();

    // Texte du footer (année courante dynamique)
    const year = new Date().getFullYear();
    const footerP = screen.getByText(
      new RegExp(`Copyright\\s+${year}\\s+-\\s+holberton\\s+School`, 'i')
    );
    expect(footerP).toBeInTheDocument();
    // Vérifie que ce <p> est bien dans le conteneur .App-footer
    expect(footerP.closest('.App-footer')).not.toBeNull();
  });

  test('renders the Holberton logo image', () => {
    render(<App />);
    // Ciblage robuste via l’attribut alt (insensible à la casse)
    const img = screen.getByAltText(/holberton logo/i);
    expect(img).toBeInTheDocument();
  });
});
