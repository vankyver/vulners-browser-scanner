import React from 'react';
import ReactDOM from 'react-dom';

import './scss/index.scss';
import {Provider} from "mobx-react";

import App from './App';
import DataStore from "./stores/Data";
import SettingsStore from "./stores/Settings";

let settingsStore = new SettingsStore()
let stores = {
    settingsStore,
    dataStore: new DataStore(settingsStore)
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider {...stores}>
            <App />
        </Provider>,
        document.getElementById('body')
    );
});
