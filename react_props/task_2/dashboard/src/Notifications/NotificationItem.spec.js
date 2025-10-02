import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotificationItem from './NotificationItem';

// (facultatif) mock du CSS
jest.mock('./Notifications.css', () => ({}), { virtual: true });

describe('NotificationItem component (Task 2)', () => {
  test('default → data-notification-type="default" et couleur bleu', () => {
    render(<ul><NotificationItem type="default" value="Default note" /></ul>);
    const li = screen.getByRole('listitem');
    expect(li).toHaveAttribute('data-notification-type', 'default');
    expect(li).toHaveStyle({ color: 'blue' });
    expect(li).toHaveTextContent('Default note');
  });

  test('urgent → data-notification-type="urgent" et couleur rouge', () => {
    render(<ul><NotificationItem type="urgent" value="Urgent note" /></ul>);
    const li = screen.getByRole('listitem');
    expect(li).toHaveAttribute('data-notification-type', 'urgent');
    expect(li).toHaveStyle({ color: 'red' });
    expect(li).toHaveTextContent('Urgent note');
  });

  test('html → rendu via dangerouslySetInnerHTML', () => {
    const html = { __html: '<strong data-testid="html-ctn">Hello</strong>' };
    render(<ul><NotificationItem type="default" html={html} /></ul>);
    const li = screen.getByRole('listitem');
    expect(li).toHaveAttribute('data-notification-type', 'default');
    expect(screen.getByTestId('html-ctn')).toHaveTextContent('Hello');
  });
});
