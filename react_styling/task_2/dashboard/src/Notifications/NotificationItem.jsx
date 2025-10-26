import React, { Component } from "react";
import PropTypes from "prop-types";
import closebtn from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";

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

  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length;
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { notifications, displayDrawer } = this.props;

    const Title = (
      <div className="text-right pr-4 font-bold text-lg text-[var(--main-color)]">
        Your notifications
      </div>
    );

    const Drawer = displayDrawer ? (
      <div
        className="border-2 border-dashed p-4 mt-2"
        style={{ borderColor: "var(--main-color)" }}
      >
        {notifications.length > 0 ? (
          <>
            <p>Here is the list of notifications</p>
            <button
              onClick={() => console.log("Close button has been clicked")}
              aria-label="Close"
              className="absolute top-2 right-2"
            >
              <img src={closebtn} alt="Close" />
            </button>
            <ul>
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
          <p>No new notification for now</p>
        )}
      </div>
    ) : null;

    return (
      <>
        {Title}
        {Drawer}
      </>
    );
  }
}
