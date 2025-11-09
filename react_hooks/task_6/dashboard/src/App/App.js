// App/App.js
import React, { useMemo, useEffect, useReducer, useCallback } from 'react';
import axios from 'axios';

import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';

import { appReducer, initialState, APP_ACTIONS } from './appReducer';

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const latestNotification = useMemo(
    () => ({ __html: getLatestNotification() }),
    []
  );

  // ---- Effects ----

  // Fetch notifications once at mount
  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        const res = await axios.get('notifications.json'); // public/
        if (!alive) return;

        let data = Array.isArray(res.data)
          ? res.data
          : res.data?.notifications ?? [];

        // Ensure at least one html notification (keeps legacy behavior & tests)
        const hasHtml = data.some((n) => n && typeof n === 'object' && 'html' in n);
        if (!hasHtml) {
          const maxId = data.reduce((m, n) => (Number(n?.id) > Number(m) ? n.id : m), 0);
          data = [
            ...data,
            { id: Number(maxId) + 1, type: 'urgent', html: latestNotification },
          ];
        }

        dispatch({ type: APP_ACTIONS.SET_NOTIFICATIONS, payload: data });
      } catch (err) {
        if (process.env.NODE_ENV !== 'production') {
          // keep output quiet in tests via spy
          console.error('[App] Failed to load notifications.json', err);
        }
      }
    })();

    return () => {
      alive = false;
    };
  }, [latestNotification]);

  // Fetch courses after login, clear when logged out
  useEffect(() => {
    let alive = true;

    (async () => {
      if (!state.user?.isLoggedIn) {
        dispatch({ type: APP_ACTIONS.SET_COURSES, payload: [] });
        return;
      }
      try {
        const res = await axios.get('courses.json'); // public/
        if (!alive) return;

        const data = Array.isArray(res.data)
          ? res.data
          : res.data?.courses ?? [];

        dispatch({ type: APP_ACTIONS.SET_COURSES, payload: data });
      } catch (err) {
        if (process.env.NODE_ENV !== 'production') {
          console.error('[App] Failed to load courses.json', err);
        }
      }
    })();

    return () => {
      alive = false;
    };
  }, [state.user?.isLoggedIn]);

  // ---- Dispatching handlers (passed as props) ----
  const handleDisplayDrawer = useCallback(
    () => dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER, payload: true }),
    []
  );
  const handleHideDrawer = useCallback(
    () => dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER, payload: false }),
    []
  );
  const markNotificationAsRead = useCallback(
    (id) => dispatch({ type: APP_ACTIONS.MARK_NOTIFICATION_READ, payload: id }),
    []
  );
  const logIn = useCallback((email, password) => {
    dispatch({ type: APP_ACTIONS.LOGIN, payload: { email, password } });
  }, []);
  const logOut = useCallback(() => {
    dispatch({ type: APP_ACTIONS.LOGOUT });
  }, []);

  // ---- Render ----
  return (
    <>
      <Notifications
        key={`notif-len-${state.notifications.length}`}
        displayDrawer={state.displayDrawer}
        notifications={state.notifications}
        listNotifications={state.notifications}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
        markNotificationAsRead={markNotificationAsRead}
        latestNotification={latestNotification}
      />

      <div className="App min-h-screen flex flex-col">
        <Header user={state.user} onLogout={logOut} />

        <main className="App-body flex-1">
          {!state.user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login
                logIn={logIn}
                email={state.user.email || ''}
                password={state.user.password || ''}
              />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <div id="CourseList">
                <CourseList courses={state.courses} />
              </div>
            </BodySectionWithMarginBottom>
          )}

          <BodySection title="News from the School">
            <h2>News from the School</h2>
            <p>Holberton School News goes here</p>
          </BodySection>
        </main>

        <Footer user={state.user} />
      </div>
    </>
  );
}
