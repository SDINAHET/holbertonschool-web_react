// src/App/App.jsx
// import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const defaultNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

// const defaultNotifications = [];

const defaultCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

// const defaultCourses = [];

// class App extends React.Component {
class App extends Component {
  // static propTypes = {
  //   isLoggedIn: PropTypes.bool,
  //   courses: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //       name: PropTypes.string.isRequired,
  //       credit: PropTypes.number.isRequired,
  //     })
  //   ),
  //   logOut: PropTypes.func,
  // };

  // static defaultProps = {
  //   isLoggedIn: false,
  //   courses: defaultCourses,
  //   logOut: () => {},
  // };

  // --- Task 0 + Task 2: local state for notifications ---
  state = {
    displayDrawer: false,
    user: { ...defaultUser },
    logOut: this.logOut, // référence stable pour le Provider
  };

  // === Task 2: auth ===
  logIn = (email, password) => {
    this.setState({ user: { email, password, isLoggedIn: true } });
  };

  logOut = () => {
    this.setState({ user: { ...defaultUser } });
  };

  // === Task 0: Notifications drawer ===
  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  handleKeyDown = (e) => {
    // Ctrl+H -> logout (via contexte/state, plus via props)
    // Safeguard keys access & accept both 'h' and 'H'
    const key = e && typeof e.key === 'string' ? e.key : '';
    if (e?.ctrlKey && (key === 'h' || key === 'H')) {
      window.alert('Logging you out');
      this.props.logOut();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { displayDrawer, user } = this.state;

    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
        <>
          <Notifications
            displayDrawer={displayDrawer}
            notifications={defaultNotifications}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <div className="App">
            <Header />

            <main className="App-body">
              {!user.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login
                    logIn={this.logIn}
                    email={user.email || ''}
                    password={user.password || ''}
                  />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList courses={defaultCourses} />
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
}

export default App;
