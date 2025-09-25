// react_intro/task_1/dashboard/src/Notifications.jsx
import React from 'react';
import './Notifications.css';
// import closeIcon from './assets/close-button.png';
// Notifications.jsx
// import closeIcon from './assets/close-icon.png'; // <-- nom exact
import { getLatestNotification } from './utils';

// export default function Notifications() {
//   return (
//     <div className="notification-items">
//       <p>Here is the list of notifications</p>
//     </div>
//   );
// }

export default function Notifications() {
  const latest = getLatestNotification();
  const latestHtml = typeof latest === 'string' ? { __html: latest } : latest;

  const handleClose = () => {
    // eslint-disable-next-line no-console
    console.log('Close button has been clicked');
  };

  return (
    <div className="notification-items" style={{ position: 'relative' }}>
      <button
        aria-label="Close"
        onClick={handleClose}
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
        {/* <img src={closeIcon} alt="close" style={{ width: 12, height: 12 }} /> */}
        x
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        {/* <li data-priority="urgent" dangerouslySetInnerHTML={latestHtml} /> */}
        <li dangerouslySetInnerHTML={latestHtml} />
      </ul>
    </div>
  );
}
