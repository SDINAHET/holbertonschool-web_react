import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({ id, type = 'default', value, html, markAsRead }) {
  // Use existing CSS variables for colors
  const color =
    type === 'urgent'
      ? 'var(--urgent-notification-item)'
      : 'var(--default-notification-item)';

  const onClick = () => {
    if (markAsRead) markAsRead(id);
  };

  // Shared responsive classes:
  // - text size adjusts down/up
  // - on small screens (<= 912px) add padding + bottom border for clear separation
  const baseClasses = [
    'cursor-pointer leading-snug',
    'text-sm sm:text-base',                 // general responsiveness
    'max-[912px]:text-base',                // ensure good readability on small screens
    'max-[912px]:px-4 max-[912px]:py-3',    // mobile/tablet padding
    'max-[912px]:border-b max-[912px]:border-gray-200', // mobile/tablet divider
  ].join(' ');

  return html ? (
    <li
      className={baseClasses}
      data-notification-type={type}
      style={{ color }}
      onClick={onClick}
      // html: { __html: '...' }
      dangerouslySetInnerHTML={html}
    />
  ) : (
    <li
      className={baseClasses}
      data-notification-type={type}
      style={{ color }}
      onClick={onClick}
    >
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
};
