// task_0/dashboard/src/Header/Header.jsx
import React, { useContext } from 'react';
import holbertonLogo from '../assets/holberton-logo.jpg';
import AppContext from '../Context/context';

export default function Header() {
  // contexte robuste même si aucun Provider n'est présent
  const ctx = useContext(AppContext) || {};
  const user = ctx.user || {};
  const logOut = typeof ctx.logOut === 'function' ? ctx.logOut : () => {};

  const handleLogout = (e) => {
    e.preventDefault();
    logOut();
  };

  return (
    <header className="App-header">
      <img src={holbertonLogo} alt="Holberton logo" />
      <h1>School Dashboard</h1>
      {user.isLoggedIn && (
        <div id="logoutSection" data-testid="logoutSection">
          <span>Welcome <strong>{user.email}</strong></span>{' '}
          <a href="#logout" onClick={handleLogout}>(logout)</a>
        </div>
      )}
    </header>
  );
}
