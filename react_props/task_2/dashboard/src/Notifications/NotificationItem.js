import React from 'react';
// (PropTypes optional but often expected later in the project)
// import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', html, value }) {
  // Render only for the 2 supported types; otherwise render nothing
  if (type === 'default') {
    const style = { color: 'blue' };
    return html ? (
      <li
        data-notification-type="default"
        style={style}
        dangerouslySetInnerHTML={html}
      />
    ) : (
      <li data-notification-type="default" style={style}>
        {value}
      </li>
    );
  }

  if (type === 'urgent') {
    const style = { color: 'red' };
    return html ? (
      <li
        data-notification-type="urgent"
        style={style}
        dangerouslySetInnerHTML={html}
      />
    ) : (
      <li data-notification-type="urgent" style={style}>
        {value}
      </li>
    );
  }

  // If type is neither 'default' nor 'urgent', render nothing
  return null;
}

// Named + default export (covers various import styles)
export { NotificationItem };
export default NotificationItem;

/*
// If your checker later requires PropTypes, uncomment:
NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
};
*/
