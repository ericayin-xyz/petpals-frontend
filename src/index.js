import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = "https://petpals-backend-s0g8.onrender.com" 
// axios.defaults.baseURL = "http://localhost:10000"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);