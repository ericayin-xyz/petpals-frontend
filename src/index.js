import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';

// axios.defaults.baseURL = "https://petpals-backend-production-a976.up.railway.app" 
axios.defaults.baseURL = "http://localhost:5000" 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);