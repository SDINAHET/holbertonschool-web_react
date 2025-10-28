import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className={[
        'App-footer w-full shrink-0 mt-auto',                     // stay at bottom in flex layouts
        'border-t-[3px] border-[var(--main-color)]',
        'text-center italic',
        'py-2 sm:py-3',                                           // responsive vertical padding
        'text-xs sm:text-sm md:text-base',                         // responsive text sizing
      ].join(' ')}
      role="contentinfo"
      aria-label="Footer"
    >
      <p>Copyright {year} - Holberton School main dashboard</p>
    </footer>
  );
}
