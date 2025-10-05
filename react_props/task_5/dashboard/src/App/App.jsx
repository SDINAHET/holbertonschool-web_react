import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import './App.css';

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

export default function App({ isLoggedIn = false, courses = coursesList }) {
  return (
    <>
      {/* 👉 Important pour le runner : displayDrawer et notifications passés explicitement */}
      <Notifications displayDrawer notifications={notificationsList} />

      <div className="App">
        <Header />
        <main className="App-body">
          {!isLoggedIn ? (
            <>
              <p className="App-body-title">Login to access the full dashboard</p>
              <Login />
            </>
          ) : (
            <CourseList courses={courses} />
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  courses: PropTypes.array,
};
