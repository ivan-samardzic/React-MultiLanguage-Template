import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);