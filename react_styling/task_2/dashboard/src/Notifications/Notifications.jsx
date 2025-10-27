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

  // Ne rerender que si la longueur change (exigence du projet)
  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length;
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { notifications, displayDrawer } = this.props;

    return (
      <div className="w-full flex flex-col items-end">
        {/* Titre toujours visible, à droite, non gras */}
        <div
          className="text-right font-normal text-base text-black"
          data-testid="notifications-title"
        >
          Your notifications
        </div>

        {/* Panneau */}
        {displayDrawer && (
          <div
            className="mt-1 relative p-2 border border-dashed rounded-none bg-white"
            style={{ borderColor: 'var(--main-color)' }}
          >
            {notifications.length === 0 ? (
              <p className="notifications-empty text-sm text-gray-600 m-0">
                No new notification for now
              </p>
            ) : (
              <>
                <p className="text-base mb-2 m-0">Here is the list of notifications</p>

                <button
                  aria-label="Close"
                  className="absolute top-2 right-2"
                  onClick={() => console.log('Close button has been clicked')}
                >
                  <img src={closeIcon} alt="Close" className="w-3 h-3" />
                </button>

                {/* Liste avec puces visibles (voir .notifications-list dans main.css) */}
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
            )}
          </div>
        )}
      </div>
    );
  }
}
