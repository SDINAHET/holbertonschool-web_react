import React from 'react';

function NotificationItem({ type = 'default', html, value }) {
  // style inline exigé par le sujet
  const style = type === 'urgent' ? { color: 'red' } : { color: 'blue' };

  // Si html est fourni, on l’injecte, sinon on affiche value
  if (html) {
    return (
      <li
        data-notification-type={type}   // ⚠️ orthographe EXACTE
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

export default NotificationItem;
export { NotificationItem };
