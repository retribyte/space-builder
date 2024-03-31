import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bootstrap from './Bootstrap';
import './assets/css/style.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9LPbP2gXa6E-UCR02NJYKX3ZeG6K68vY",
  authDomain: "space-builder-cop4864.firebaseapp.com",
  projectId: "space-builder-cop4864",
  storageBucket: "space-builder-cop4864.appspot.com",
  messagingSenderId: "689774451392",
  appId: "1:689774451392:web:46e54938b264e9be63ab25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
    <script src="./model.js"></script>
    <Bootstrap />
  </React.StrictMode>,
  document.getElementById('root')
);
