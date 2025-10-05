import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({ type = 'default', value, html }) {
  const style = { color: type === 'urgent' ? 'red' : 'blue' };

  if (html) {
    return (
      <li
        data-notification-type={type}
        style={style}
        dangerouslySetInnerHTML={html}
      />
    );
  }
  return (
    <li data-notification-type={type} style={style}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.oneOf(['default', 'urgent']),
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
};
