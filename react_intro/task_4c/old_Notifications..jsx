import React from 'react';
import './Notifications.css';
// import closeIcon from './assets/close-icon.png';
import closeButton from './assets/close-button.png';   // <-- nom attendu
import { getLatestNotification } from './utils';

export default function Notifications() {
  return (
    <div className="Notifications" style={{ position: 'relative' }}>
      {/* Titre exact */}
      <p>Here is the list of notifications</p>

      {/* Liste des notifications */}
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>

      {/* Bouton Close */}
      {/* <button
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
        <img src={closeIcon} alt="close" style={{ width: '10px', height: '10px' }} />
      </button> */}
      <button
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
        style={{ position: 'absolute', top: 10, right: 10, background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <img src={closeButton} alt="close" width="12" height="12" />
      </button>
    </div>
  );
}
