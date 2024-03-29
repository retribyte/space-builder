import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bootstrap from './Bootstrap';
import './assets/css/style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <script src="./model.js"></script>
    <Bootstrap />
  </React.StrictMode>,
  document.getElementById('root')
);
