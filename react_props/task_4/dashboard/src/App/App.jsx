import React, { Fragment } from 'react';
import './App.css';

import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { getLatestNotification } from '../utils/utils.js';

function App() {
  const now = Date.now();
  const notificationsList = [
    { id: now,     type: 'default', value: 'New course available' },
    { id: now + 1, type: 'urgent',  value: 'New resume available' },
    { id: now + 2, type: 'urgent',  html: { __html: getLatestNotification() } }, // html item
  ];

  return (
    <Fragment>
      <div className="root-notifications">
        <Notifications notifications={notificationsList} />
      </div>
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
}

export default App;
