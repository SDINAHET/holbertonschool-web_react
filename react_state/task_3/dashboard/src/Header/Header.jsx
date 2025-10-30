// task_3/dashboard/src/Header/Header.jsx
import React, { Component } from 'react';
import holbertonLogo from '../assets/holberton-logo.jpg';
import AppContext from '../Context/context';

class Header extends Component {
  // ➜ on dit à React : “je veux le context ici”
  static contextType = AppContext;

  handleLogout = (e) => {
    e.preventDefault();
    const { logOut } = this.context;
    if (typeof logOut === 'function') {
      logOut();
    }
  };

  render() {
    const { user } = this.context;
    const isLoggedIn = user && user.isLoggedIn;
    const email = (user && user.email) || '';

    return (
      <header className="App-header flex items-center p-[10px]">
        <img
          className="App-logo h-[200px] mr-5"
          src={holbertonLogo}
          alt="Holberton logo"
        />
        <div>
          <h1 className="text-[var(--main-color)] text-4xl font-bold">
            School Dashboard
          </h1>

          {/* bloc demandé dans la task 3 */}
          {isLoggedIn && (
            <div id="logoutSection" className="text-sm mt-2">
              <span>
                Welcome <strong>{email}</strong>{' '}
              </span>
              <a
                href="#logout"
                onClick={this.handleLogout}
                className="text-blue-500 underline"
              >
                (logout)
              </a>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
