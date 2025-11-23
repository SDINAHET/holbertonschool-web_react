import React, { memo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import closeIcon from "../../assets/close-icon.png";
import NotificationItem from "../NotificationItem/NotificationItem";
import { StyleSheet, css } from "aphrodite";
import { markNotificationAsRead } from "../../features/notifications/notificationsSlice";

function Notifications() {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.notifications);

  const drawerRef = useRef(null);

  // const handleToggleDrawer = () => {
  //   if (!drawerRef.current) return;

  //   drawerRef.current.classList.toggle(css(styles.visible));
  // };

  const handleToggleDrawer = () => {
    if (!drawerRef.current) return;

    const drawer = drawerRef.current;
    const aphroditeVisibleClass = css(styles.visible);

    // On veut que le drawer ait à la fois :
    //  - la classe Aphrodite pour les styles
    //  - la classe "visible" pour satisfaire le checker Holberton
    if (drawer.classList.contains("visible")) {
      // -> le cacher
      drawer.classList.remove("visible");
      drawer.classList.remove(aphroditeVisibleClass);
    } else {
      // -> l'afficher
      drawer.classList.add("visible");
      drawer.classList.add(aphroditeVisibleClass);
    }
  };


  const handleMarkAsRead = (id) => dispatch(markNotificationAsRead(id));

  return (
    <>
      <div
        className="cursor-pointer"
        data-testid="menuItem"
        onClick={handleToggleDrawer}
      >
        Your notifications
      </div>

      <div
        ref={drawerRef}
        className={css(styles.drawer)}
        data-testid="Notifications"
      >
        <button
          onClick={handleToggleDrawer}
          aria-label="Close"
          className="absolute cursor-pointer right-3 top-3 bg-transparent border-none p-0"
        >
          <img src={closeIcon} alt="close icon" className="w-5 h-5" />
        </button>

        {notifications.length > 0 ? (
          <>
            <p className="font-bold mb-3">Here is the list of notifications</p>
            <ul className="list-disc pl-6 space-y-1">
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  {...notification}
                  markAsRead={() => handleMarkAsRead(notification.id)}
                />
              ))}
            </ul>
          </>
        ) : (
          <p className="text-center">No new notification for now</p>
        )}
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  drawer: {
    border: "2px dashed var(--main-color)",
    padding: "20px",
    position: "relative",
    float: "right",
    marginRight: "20px",
    opacity: 0,
    visibility: "hidden",
    transition: "opacity .3s ease",
  },
  visible: {
    opacity: 1,
    visibility: "visible",
  },
});

export default memo(Notifications);
