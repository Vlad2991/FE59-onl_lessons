import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.jsx'; 
import './index.css';

const rootElement = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);