// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Importe também o CSS do antd, se quiser
import 'antd/dist/reset.css'; // ou 'antd/dist/antd.css' dependendo da versão

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
