// task_4/dashboard/src/App/App.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import './App.css';

const coursesList = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

// ✅ use a default parameter instead of defaultProps
function App({ isLoggedIn = false }) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <main className="App-body">
          {!isLoggedIn ? <Login /> : <CourseList courses={coursesList} />}
        </main>
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

// ❌ remove App.defaultProps if you still have it
// App.defaultProps = { isLoggedIn: false };

export default App;
