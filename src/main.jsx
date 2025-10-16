import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// PUBLIC_INTERFACE
function bootstrap() {
  /** This bootstraps the React app into #root. */
  const rootEl = document.getElementById('root');
  const root = createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

bootstrap();
