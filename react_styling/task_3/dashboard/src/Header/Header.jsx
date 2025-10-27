import React from 'react';
import holbertonLogo from '../assets/holberton-logo.jpg';

export default function Header() {
  return (
    <header className="App-header flex items-center gap-4 border-b-[3px] border-[var(--main-color)] py-5">
      <img
        className="App-logo h-[200px] block"
        src={holbertonLogo}
        alt="Holberton logo"
      />
      <h1 className="text-[var(--main-color)] text-4xl font-bold">
        School dashboard
      </h1>
    </header>
  );
}
