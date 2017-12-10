import React from 'react';
import ReactDOM from 'react-dom';

import './scss/index.scss';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('body'));
});
