import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './services/client.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
