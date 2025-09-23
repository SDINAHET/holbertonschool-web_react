// react_intro/task_1/dashboard/src/App.jsx
import React from 'react';
import './App.css';
import logo from './assets/holberton-logo.jpg';

import Notifications from './Notifications';
import { getCurrentYear, getFooterCopy } from './utils';

export default function App() {
  return (
    <div className="App">
      {/* Panneau Notifications, enfant direct de App (comme demandé) */}
      <div className="root-notifications">
        <Notifications />
      </div>

      <header className="App-header">
        <img src={logo} alt="holberton logo" className="logo" />
        <h1>School dashboard</h1>
      </header>

      <main className="App-body">
        <p>Login to access the full dashboard</p>
      </main>

      <footer className="App-footer">
        <p>
          <em>
            Copyright {getCurrentYear()} - {getFooterCopy(true)}
          </em>
        </p>
      </footer>
    </div>
  );
}
