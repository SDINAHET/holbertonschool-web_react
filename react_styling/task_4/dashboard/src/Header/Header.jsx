import React from 'react';
import holbertonLogo from '../assets/holberton-logo.jpg';

export default function Header() {
  return (
    <header
      className={[
        'App-header flex items-center justify-start',
        'p-4 sm:p-5 md:p-6',
        // Stack vertically on narrow screens and center everything
        'max-[520px]:flex-col max-[520px]:items-center max-[520px]:text-center',
        // Consistent spacing regardless of direction
        'gap-4 max-[520px]:gap-2',
      ].join(' ')}
    >
      <img
        className={[
          'App-logo h-[160px] w-auto mr-5',
          // Remove right margin when stacked and shrink on very small screens
          'max-[520px]:mr-0 max-[520px]:h-[120px] max-[400px]:h-[100px]',
        ].join(' ')}
        src={holbertonLogo}
        alt="Holberton logo"
      />

      <h1
        className={[
          'text-[var(--main-color)] font-bold leading-tight',
          // Default desktop/tablet size
          'text-3xl md:text-4xl',
          // Below 520px use smaller, then even smaller below 400px
          'max-[520px]:text-2xl max-[400px]:text-xl',
          // Keep spacing sane if the title wraps
          'tracking-tight',
        ].join(' ')}
      >
        School Dashboard
      </h1>
    </header>
  );
}
