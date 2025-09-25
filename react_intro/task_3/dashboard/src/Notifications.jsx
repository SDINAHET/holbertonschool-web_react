import React from 'react';
import { getLatestNotification } from './utils';

export default function Notifications() {
  const latest = getLatestNotification();
  const latestHtml = { __html: latest };

  return (
    <div className="notification-items" style={{ position: 'relative' }}>
      <button
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
        style={{
          position: 'absolute',
          top: 6,
          right: 8,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 4,
          lineHeight: 0
        }}
      >
        x
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={latestHtml} />
      </ul>
    </div>
  );
}
