import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalProvider} from './context/Provider';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
