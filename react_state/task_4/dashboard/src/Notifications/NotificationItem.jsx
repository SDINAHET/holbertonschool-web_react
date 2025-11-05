import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({
  id,
  type = 'default',
  value,
  html,
  // ✅ accepte les deux noms de handler
  markAsRead,
  markNotificationAsRead,
}) {
  const color =
    type === 'urgent'
      ? 'var(--urgent-notification-item)'
      : 'var(--default-notification-item)';

  const onClick = () => {
    if (typeof markNotificationAsRead === 'function') {
      markNotificationAsRead(id);
    } else if (typeof markAsRead === 'function') {
      markAsRead(id);
    } else {
      console.log(`Notification ${id} has been marked as read`);
    }
  };

  return html ? (
    <li
      data-notification-type={type}
      style={{ color }}
      onClick={onClick}
      dangerouslySetInnerHTML={html}
    />
  ) : (
    <li data-notification-type={type} style={{ color }} onClick={onClick}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};
