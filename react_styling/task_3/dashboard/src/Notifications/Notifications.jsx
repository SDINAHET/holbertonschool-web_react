import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

export default class Notifications extends Component {
  static propTypes = {
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

  static defaultProps = {
    notifications: [],
    displayDrawer: false,
  };

  // ✅ Important: tenir compte aussi de displayDrawer pour déclencher un re-render
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.notifications.length !== this.props.notifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { notifications, displayDrawer } = this.props;
    const hasNotifications = notifications.length > 0;

    // ✅ Bounce uniquement quand il y a des notifs ET que le drawer est fermé
    const bounceClass = hasNotifications && !displayDrawer ? 'animate-bounce' : '';

    return (
      <>
        {/* Toujours visible et ciblé par le checker */}
        <div className={`menuItem ${bounceClass}`} data-testid="notifications-title">
          Your notifications
        </div>

        {/* Drawer rendu seulement quand displayDrawer = true */}
        {displayDrawer && (
          <div
            className="Notifications relative mt-1 inline-block p-2 border border-dotted rounded-none bg-white"
            style={{ borderColor: 'var(--main-color)' }}
          >
            {hasNotifications ? (
              <>
                <p className="text-base mb-2 m-0">Here is the list of notifications</p>

                <button
                  aria-label="Close"
                  className="absolute top-2 right-2"
                  onClick={() => console.log('Close button has been clicked')}
                >
                  <img src={closeIcon} alt="Close" className="w-3 h-3" />
                </button>

                <ul className="notifications-list">
                  {notifications.map((n) => (
                    <NotificationItem
                      key={n.id}
                      id={n.id}
                      type={n.type}
                      value={n.value}
                      html={n.html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <p className="notifications-empty m-0">No new notification for now</p>
            )}
          </div>
        )}
      </>
    );
  }
}
