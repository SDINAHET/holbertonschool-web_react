// task_4/dashboard/src/App/App.jsx
import React, { useState, useCallback, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';

import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

import AppContext, { defaultUser } from '../Context/context';

// 👉 le checker veut CES NOMS-LÀ
const notificationsList = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

const coursesList = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

// export default function App({ isLoggedIn: _isLoggedInProp, courses: _coursesProp, logOut: _logOutProp }) {
export default function App() {
  // user initial depuis le contexte (fallback sur defaultUser)
  const ctx = useContext(AppContext) || {};
  const initialUser = ctx.user ?? defaultUser;

  // === state (hooks) ===
  // NB: consigne = displayDrawer initialisé à true
  const [displayDrawer, setDisplayDrawer] = useState(true);
  const [user, setUser] = useState(initialUser);
  const [notifications, setNotifications] = useState(notificationsList);
  const [courses] = useState(coursesList);

  // === handlers mémoïsés (références stables entre re-renders) ===
  const handleDisplayDrawer = useCallback(() => {
    setDisplayDrawer(true);
  }, []);

  const handleHideDrawer = useCallback(() => {
    setDisplayDrawer(false);
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    const target = Number(id);
    // maj immuable: on filtre l’élément lu
    setNotifications((prev) => (prev || []).filter((n) => Number(n.id) !== target));
  }, []);

  const logIn = useCallback((email, password) => {
    setUser({ email, password, isLoggedIn: true });
  }, []);

  const logOut = useCallback(() => {
    setUser({ ...defaultUser });
  }, []);

  // valeur de contexte stable
  const contextValue = useMemo(() => ({ user, logOut }), [user, logOut]);

  return (
    <AppContext.Provider value={contextValue}>
      <>
        <Notifications
          displayDrawer={displayDrawer}
          notifications={notifications}
          listNotifications={notifications}
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
          markNotificationAsRead={markNotificationAsRead}
        />

        <div className="App min-h-screen flex flex-col">
          <Header />

          <main className="App-body flex-1">
            {!user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={logIn} email={user.email || ''} password={user.password || ''} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Course list">
                <div id="CourseList">
                  <CourseList courses={courses} />
                </div>
              </BodySectionWithMarginBottom>
            )}

            <BodySection title="News from the School">
              <p>Holberton School News goes here</p>
            </BodySection>
          </main>

          <Footer />
        </div>
      </>
    </AppContext.Provider>
  );
}

// PropTypes / defaultProps gardés pour compatibilité avec d’anciens tests
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  courses: [],
  logOut: () => {},
};

export { notificationsList, coursesList };
