import React from 'react';
import './Notifications.css';
// import closeIcon from "./assets/close-icon.png";
import closeIcon from '../assets/close-button.png';
// import closeButton from "./assets/close-button.png";
// import { getLatestNotification } from './utils';
import { getLatestNotification } from '../utils/utils.js';
// import { getFullYear, getFooterCopy, getLatestNotification } from '../utils/utils.js';

export default function Notifications() {
  return (
    <div className="Notifications" style={{ position: 'relative' }}>
      {/* Titre exact */}
      <p>Here is the list of notifications</p>

      {/* Liste des notifications */}
      <ul>
        <li data-notification-type="default">New course available</li>
        <li data-notification-type="urgent">New resume available</li>
        <li
          data-notification-type="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
      {/* <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul> */}

      {/* Bouton Close */}
      <button
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        {/* <img src={closeIcon} alt="close" style={{ width: '10px', height: '10px' }} /> */}
        <img src={closeIcon} alt="close" style={{ width: '10px', height: '10px' }} />
      </button>
    </div>
  );
}
