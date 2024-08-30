import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './fonts/Capitolium.otf';
import './fonts/Melikan.otf';
import '../index.css';
import ThemeProvider from './theme/ThemeProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
