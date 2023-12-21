import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './scss/null.scss';
import './scss/mixins.scss';
import './scss/fonts.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  basename="/prod"
  <BrowserRouter basename="/prod">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);
