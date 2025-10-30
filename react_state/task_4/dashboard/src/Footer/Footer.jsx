import React from 'react';
import AppContext from '../Context/context';

export default function Footer() {
  const { user } = useContext(AppContext);
  const year = new Date().getFullYear();

  return (
    <footer className="App-footer border-t-[3px] border-[var(--main-color)] py-2 text-center italic">
      <p>Copyright {year} - Holberton School</p>
      {user?.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </footer>
  );
}
