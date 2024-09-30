import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BasketContextProvider from './contexts/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasketContextProvider>
      <App />
    </BasketContextProvider>
  </React.StrictMode>
);
