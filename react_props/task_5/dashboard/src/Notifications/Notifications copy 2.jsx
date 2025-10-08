import PropTypes from 'prop-types';
import './Notifications.css';
import closebtn from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

export default function Notifications({
  notifications = [],
  displayDrawer = false,
}) {
  return (
    <div className="Notifications">
      {/* Titre TOUJOURS visible */}
      <div className="notification-title" data-testid="notifications-title">
        <p>Your Notifications</p>
      </div>

      {displayDrawer && (
        // .notification-items doit être juste après .notification-title
        <div className="notification-items">
          {notifications.length > 0 ? (
            <>
              <p>Here is the list of notifications</p>

              {/* ✅ Bouton UNIQUEMENT quand il y a des items */}
              <button
                type="button"
                aria-label="Close"
                className="notifications-close"
                onClick={() => console.log('Close button has been clicked')}
              >
                <img src={closebtn} alt="Close" />
              </button>

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
          ) : (
            // Cas liste vide : pas de bouton, pas de <ul>, pas de "Here is..."
            <p className="notifications-empty">No new notification for now</p>
          )}
        </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
  displayDrawer: PropTypes.bool,
};
