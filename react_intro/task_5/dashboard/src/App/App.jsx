import React from 'react';
import "./App.css";
// import logo from "./assets/holberton-logo.jpg";
// import { getCurrentYear, getFooterCopy } from "./utils";
import {
  getCurrentYear,
  getFooterCopy,
} from '../utils/utils.js';         // ← important
import Notifications from "../Notifications/Notifications";
import holbertonLogo from '../assets/holberton-logo.jpg';

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>

      <div className="App-header">
        {/* <img src={logo} alt="holberton logo" /> */}
        <img src={holbertonLogo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <div className="App-login">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button>OK</button>
        </div>
      </div>

      <div className="App-footer">
        {/* <p>Copyright {getCurrentYear()} Holberton School main dashboard</p> */}
        <p>Copyright {getCurrentYear()} {getFooterCopy(false)}</p>
        {/* SANS tiret */}
        {/* <p>
          Copyright {getCurrentYear()} {getFooterCopy(false)}
        </p> */}
      </div>
    </>
  );
}

export default App;
