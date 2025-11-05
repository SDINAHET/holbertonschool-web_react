// task_0/dashboard/src/Header/Header.jsx
// import React, { Component } from 'react';
import React, { useContext } from 'react';
import holbertonLogo from '../assets/holberton-logo.jpg';
import NewContext from '../Context/context';


export default function Header() {
  const { user, logOut } = useContext(NewContext);

  const handleLogout = (e) => {
    e.preventDefault();
    if (typeof logOut === 'function') {
      logOut();
    }
  };

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

        {isLoggedIn && (
          <div id="logoutSection" className="text-sm mt-2" data-testid="logoutSection">
            <span>
              Welcome <strong>{email}</strong>{' '}
            </span>
            <a
              href="#logout"
              onClick={handleLogout}
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
