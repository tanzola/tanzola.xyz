import ReactDOM from 'react-dom';

import './index.css';
import App from './App.js';

window.addEventListener("load", (event) => {
    /* prevent unstyled elements flashing on load */
    document.body.className = document.body.className.replace("preload", "");
});

ReactDOM.render(<App />, document.getElementById('root'));