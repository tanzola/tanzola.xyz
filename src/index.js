import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.js';
import React from 'react';

window.addEventListener("load", (event) => {
    /* prevent unstyled elements flashing on load */
    document.body.className = document.body.className.replace("preload", "");
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);