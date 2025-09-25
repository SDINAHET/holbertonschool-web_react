import React from 'react';
import './Notifications.css';
// import closeIcon from './assets/close-button.png';
import closeIcon from './assets/close-icon.png';
import { getLatestNotification } from './utils';

export default function Notifications() {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications" role="region" aria-label="Notifications">
      <button
        className="Notifications-close"
        aria-label="Close"
        onClick={handleClick}
      >
        <img src={closeIcon} alt="close icon" width="10" height="10" />
      </button>

      <p>Here is the list of notifications</p>
      <ul>
        <li data-notification-type="default">New course available</li>
        <li data-notification-type="urgent">New resume available</li>
        <li
          data-notification-type="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}
