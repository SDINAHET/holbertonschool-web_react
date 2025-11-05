// task_0/dashboard/src/Header/Header.jsx
import React, { useContext } from 'react';
import holbertonLogo from '../assets/holberton-logo.jpg';
import AppContext, { defaultUser } from '../Context/context';

export default function Header() {
  const ctx = useContext(AppContext) || {};
  const user = ctx.user ?? defaultUser;
  const logOut = typeof ctx.logOut === 'function' ? ctx.logOut : () => {};

  const handleLogout = (e) => {
    e.preventDefault();
    logOut();
  };

  return (
    <header className="App-header d-flex align-items-center p-2">
      <img
        src={holbertonLogo}
        alt="Holberton logo"
        className="App-logo img-fluid me-3"
      />
      <h1 className="text-primary display-5 fw-bold mb-0">School Dashboard</h1>

      {user.isLoggedIn && (
        <div id="logoutSection" data-testid="logoutSection" className="ms-3 small">
          <span>
            Welcome <strong>{user.email}</strong>
          </span>{' '}
          <a href="#logout" onClick={handleLogout} className="text-decoration-underline">
            (logout)
          </a>
        </div>
      )}
    </header>
  );
}
