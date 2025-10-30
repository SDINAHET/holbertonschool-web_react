// task_2/dashboard/src/App/App.jsx
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

import AppContext, { defaultUser } from '../Context/context';

const defaultNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

const defaultCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

class App extends Component {
  static propTypes = {
    // gardé pour compat avec les anciens tests
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

  static defaultProps = {
    isLoggedIn: false,
    courses: defaultCourses,
    logOut: () => {},
  };

  constructor(props) {
    super(props);

    const user = { ...defaultUser };

    this.state = {
      displayDrawer: false,
      user,
      logOut: this.logOut,
      // 👇 valeur de contexte unique et stockée dans le state
      contextValue: {
        user,
        logOut: this.logOut,
      },
    };
  }

  // === Auth ===
  logIn = (email, password) => {
    const user = {
      email,
      password,
      isLoggedIn: true,
    };

    this.setState({
      user,
      contextValue: {
        user,
        logOut: this.logOut,
      },
    });
  };

  logOut = () => {
    const user = { ...defaultUser };

    this.setState({
      user,
      contextValue: {
        user,
        logOut: this.logOut,
      },
    });
  };

  // === Notifications drawer ===
  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  // === Keyboard (Ctrl+H) ===
  handleKeyDown = (e) => {
    const key = e && typeof e.key === 'string' ? e.key : '';
    if (e?.ctrlKey && (key === 'h' || key === 'H')) {
      window.alert('Logging you out');
      this.state.logOut();
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
      <AppContext.Provider value={this.state.contextValue}>
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
                  <div id="CourseList">
                    <CourseList courses={defaultCourses} />
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
}

export default App;
