import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem.jsx';
import { getLatestNotification } from '../utils/utils.js';

export default function Notifications({
  displayDrawer = false,
  notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
  ],
}) {
  return (
    <div className="Notifications" style={{ position: 'relative' }}>
      {/* Titre toujours visible */}
      <div className="notification-title">Your notifications</div>

      {/* Contenu conditionnel */}
      {displayDrawer && (
        <div className="notification-items">
          {notifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {notifications.map((n) => (
                  <NotificationItem
                    key={n.id}
                    type={n.type}
                    value={n.value}
                    html={n.html}
                  />
                ))}
              </ul>
            </>
          )}

          <button
            className="Notifications-close"
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
          >
            <img src={closeIcon} alt="Close" style={{ width: 10, height: 10 }} />
          </button>
        </div>
      )}
    </div>
  );
}
