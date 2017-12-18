import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from "./reducers";
import dataService from "./dataService";

export function configureStore(initialState = {}) {
    return createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(dataService),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
}

export const store = configureStore();