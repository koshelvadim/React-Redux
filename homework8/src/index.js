import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BasketContextProvider from './contexts/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('react'));
root.render(
  <React.StrictMode>
    <BasketContextProvider> {/* провайдер для контекста */}
      <App />
    </BasketContextProvider>
  </React.StrictMode>
);
