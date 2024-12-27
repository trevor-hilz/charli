import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import '../public/style.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found in the DOM.');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
