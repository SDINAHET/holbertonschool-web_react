// Login.jsx
import React from 'react';
import WithLogging from '../HOC/WithLogging';

function Login() {
  return (
    // ⚠️ PAS de border ici
    <div className="App-body p-[10px]">
      {/* ✅ La SEULE bordure-top doit être sur CE div */}
      <div className="border-t-[3px] border-[var(--main-color)] pt-2">
        <p className="text-sm mb-2">Login to access the full dashboard</p>

        <form
          className={[
            'App-login inline-flex items-center gap-2 flex-wrap',
            // On mobile: stack vertically and stretch children to full width
            'max-[520px]:flex-col max-[520px]:items-stretch max-[520px]:gap-2',
          ].join(' ')}
        >
          <label
            htmlFor="email"
            className="ml-4 mr-2 max-[520px]:ml-0 max-[520px]:mr-0"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className={[
              'border border-gray-300 px-2 py-1 mr-2 rounded',
              'max-[520px]:mr-0 max-[520px]:w-full',
            ].join(' ')}
          />

          <label
            htmlFor="password"
            className="ml-4 mr-2 max-[520px]:ml-0 max-[520px]:mr-0"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className={[
              'border border-gray-300 px-2 py-1 mr-2 rounded',
              'max-[520px]:mr-0 max-[520px]:w-full',
            ].join(' ')}
          />

          {/* Petit bouton OK */}
          <button
            className={[
              'border rounded-sm text-[11px] leading-tight',
              'px-2 py-0.5',                     // compact
              'hover:bg-[var(--main-color)]/10', // léger hover
              'focus:outline-none focus:ring-1 focus:ring-[var(--main-color)]',
              // sur mobile, garder petit et aligné à gauche
              'max-[520px]:self-start',
            ].join(' ')}
          >
            OK
          </button>
        </form>
      </div>
    </div>
  );
}
export default WithLogging(Login);
