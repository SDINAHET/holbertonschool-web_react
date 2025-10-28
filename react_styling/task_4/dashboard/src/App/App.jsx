// src/App/App.jsx
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

const defaultCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

class App extends Component {
  static propTypes = {
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

  handleKeyDown = (e) => {
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
    const { isLoggedIn, courses } = this.props;

    return (
      <>
        <Notifications displayDrawer={true} notifications={defaultNotifications} />

        {/* App wrapper: responsive container + flex layout */}
        <div
          className={[
            'App min-h-screen flex flex-col',                // full height + column layout
            'bg-white',                                       // base background (optional)
          ].join(' ')}
        >
          {/* Constrained, responsive inner container */}
          <div
            className={[
              'w-full mx-auto max-w-6xl',                     // center + max width
              'px-3 sm:px-4 md:px-6 lg:px-8',                 // responsive horizontal padding
              'pt-3 sm:pt-4 md:pt-6',                         // responsive top padding
            ].join(' ')}
          >
            <Header />
          </div>

          {/* Main grows to fill space between header and footer */}
          <main
            className={[
              'App-body flex-1 w-full mx-auto max-w-6xl',
              'px-3 sm:px-4 md:px-6 lg:px-8',
              'py-4 sm:py-6 md:py-8',                         // slightly tighter on small screens
            ].join(' ')}
          >
            {!isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList courses={courses} />
              </BodySectionWithMarginBottom>
            )}

            <BodySection title="News from the School">
              <p>
                ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
                asperiores architecto blanditiis fuga doloribus sit illum aliquid ea distinctio
                minus accusantium, impedit quo voluptatibus ut magni dicta. Recusandae, quia dicta?
              </p>
            </BodySection>
          </main>

          {/* Footer pinned to bottom thanks to flex layout */}
          <div
            className={[
              'w-full mx-auto max-w-6xl',
              'px-3 sm:px-4 md:px-6 lg:px-8',
              'pb-3 sm:pb-4 md:pb-6',                         // responsive bottom padding
            ].join(' ')}
          >
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default App;
