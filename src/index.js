import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //importing CSS`
import App from './App'; //App.js importation
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

