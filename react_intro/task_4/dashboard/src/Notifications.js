import React from 'react';
import { getLatestNotification } from './utils.js'; // extension .js obligatoire

export default function Notifications() {
  const latestHtml = { __html: getLatestNotification() };

  return React.createElement(
    'div',
    { className: 'notification-items', style: { position: 'relative' } },

    React.createElement(
      'button',
      {
        'aria-label': 'Close',
        onClick: () => console.log('Close button has been clicked'),
        style: {
          position: 'absolute',
          top: 6,
          right: 8,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 4,
          lineHeight: 0
        }
      },
      'x'
    ),

    React.createElement('p', null, 'Here is the list of notifications'),

    React.createElement(
      'ul',
      null,
      React.createElement('li', { 'data-priority': 'default' }, 'New course available'),
      React.createElement('li', { 'data-priority': 'urgent' }, 'New resume available'),
      React.createElement('li', { dangerouslySetInnerHTML: latestHtml })
    )
  );
}
