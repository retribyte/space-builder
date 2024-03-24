import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Objects from './Objects';
import Information from './Information'
import navBar from './navbar';
import mapPanel from './map'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <navBar />
    <Objects />
    <Information />
    <mapPanel />
  </React.StrictMode>

);