import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bootstrap from './Bootstrap';
import './assets/css/style.css';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter><App /></BrowserRouter>
        <Bootstrap />
    </React.StrictMode>,
    document.getElementById('root')
);