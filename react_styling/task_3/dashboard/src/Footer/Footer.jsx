import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="App-footer">
      <p>Copyright {year} - Holberton School</p>
    </footer>
  );
}
