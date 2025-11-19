// import React, { memo, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import PropTypes from "prop-types";
// import closeIcon from "../../assets/close-icon.png";
// import NotificationItem from "../NotificationItem/NotificationItem";
// import {
//   markNotificationAsRead,
//   showDrawer,
//   hideDrawer,
//   fetchNotifications,
// } from "../../features/notifications/notificationsSlice";

// function Notifications() {
//   const dispatch = useDispatch();

//   // 👉 On va chercher les notifications au montage du composant
//   useEffect(() => {
//     dispatch(fetchNotifications());
//   }, [dispatch]);

//   // 📌 Récupération de l'état depuis le slice notifications
//   const notifications = useSelector(
//     (state) => state.notifications.notifications
//   );
//   const displayDrawer = useSelector(
//     (state) => state.notifications.displayDrawer
//   );

//   // 📌 Handlers maintenant gérés ici et dispatch vers Redux
//   const handleDisplayDrawer = () => {
//     dispatch(showDrawer());
//   };

//   const handleHideDrawer = () => {
//     dispatch(hideDrawer());
//   };

//   const handleMarkAsRead = (id) => {
//     dispatch(markNotificationAsRead(id));
//   };

//   // --- Styles ---
//   const borderStyle = {
//     borderColor: "var(--main-color)",
//   };

//   const titleClassName = `text-right pr-8 pt-2 ${
//     notifications.length > 0 && !displayDrawer ? "animate-bounce" : ""
//   }`;

//   return (
//     <>
//       <div
//         className={`${titleClassName} cursor-pointer`}
//         onClick={handleDisplayDrawer}
//         data-testid="menuItem"
//       >
//         Your notifications
//       </div>

//       {displayDrawer && (
//         <div
//           className="border-2 border-dashed bg-white p-6 relative float-right mr-8 mt-2 max-w-4xl"
//           style={borderStyle}
//           data-testid="Notifications"
//         >
//           <button
//             onClick={() => {
//               console.log("Close button has been clicked");
//               handleHideDrawer();
//             }}
//             aria-label="Close"
//             className="absolute cursor-pointer right-3 top-3 bg-transparent border-none p-0"
//           >
//             <img src={closeIcon} alt="close icon" className="w-5 h-5" />
//           </button>

//           {notifications.length > 0 ? (
//             <>
//               <p className="font-bold mb-3">
//                 Here is the list of notifications
//               </p>
//               <ul className="list-disc pl-6 space-y-1">
//                 {notifications.map((notification) => (
//                   <NotificationItem
//                     key={notification.id}
//                     type={notification.type}
//                     value={notification.value}
//                     html={notification.html}
//                     markAsRead={() => handleMarkAsRead(notification.id)}
//                   />
//                 ))}
//               </ul>
//             </>
//           ) : (
//             <p className="text-center">No new notification for now</p>
//           )}
//         </div>
//       )}
//     </>
//   );
// }

// // PropTypes facultatifs, mais ça ne gêne pas
// Notifications.propTypes = {
//   notifications: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       type: PropTypes.string,
//       value: PropTypes.string,
//       html: PropTypes.shape({ __html: PropTypes.string }),
//     })
//   ),
//   displayDrawer: PropTypes.bool,
// };

// // 👉 Pour les tests "No unnecessary re-renders", on garde la même logique
// /* eslint-disable no-unused-vars */
// const areEqual = (prevProps, nextProps) => {
//   return (
//     prevProps.notifications.length === nextProps.notifications.length &&
//     prevProps.displayDrawer === nextProps.displayDrawer
//   );
// };
// /* eslint-enable no-unused-vars */

// export default memo(Notifications, areEqual);

// src/components/Notifications/Notifications.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import closeIcon from "../../assets/close-icon.png";
import NotificationItem from "../NotificationItem/NotificationItem";
import {
  showDrawer,
  hideDrawer,
  markNotificationAsRead,
} from "../../features/notifications/notificationsSlice";

function Notifications() {
  const dispatch = useDispatch();

  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  const displayDrawer = useSelector(
    (state) => state.notifications.displayDrawer
  );

  const handleOpen = () => {
    dispatch(showDrawer());
  };

  const handleClose = () => {
    dispatch(hideDrawer());
  };

  const handleMarkAsRead = (id) => {
    dispatch(markNotificationAsRead(id));
  };

  return (
    <div className="Notifications-wrapper">
      <div
        className="menuItem"
        onClick={handleOpen}
        data-testid="menuItem"
      >
        Your notifications
      </div>

      {displayDrawer && (
        <div className="Notifications" data-testid="notificationsDrawer">
          <button
            type="button"
            aria-label="Close"
            onClick={handleClose}
            style={{
              position: "absolute",
              right: "1rem",
              top: "1rem",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <img src={closeIcon} alt="close icon" />
          </button>

          <p>Here is the list of notifications</p>
          <ul>
            {notifications.length === 0 && (
              <NotificationItem value="No new notification for now" />
            )}
            {notifications.map((notif) => (
              <NotificationItem
                key={notif.id}
                id={notif.id}
                type={notif.type}
                value={notif.value}
                html={notif.html}
                markAsRead={handleMarkAsRead}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Notifications;
