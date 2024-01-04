import ReactDOM from 'react-dom';

import './index.css';
import App from './App.js';
import React from 'react';

window.addEventListener("load", (event) => {
    /* prevent unstyled elements flashing on load */
    document.body.className = document.body.className.replace("preload", "");
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);