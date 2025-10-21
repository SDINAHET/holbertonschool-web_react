import React from 'react';
import ReactDOM from 'react-dom/client';

// ✅ Roboto weights exigés par le checker
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// ✅ Tailwind v4 + thème global
import './main.css';

import App from './App/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
