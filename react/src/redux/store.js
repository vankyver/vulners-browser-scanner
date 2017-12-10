import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from "./reducers";
import dataService from "./dataService";

export function configureStore(initialState = {}) {
    return createStore(
        reducers,
        initialState,
        applyMiddleware(dataService)
    )
}

export const store = configureStore();