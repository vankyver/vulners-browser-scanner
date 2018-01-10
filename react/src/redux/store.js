import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from "./reducers";
import dataService from "./dataService";
import testDataService from "./test/testDataService";

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
        compose;


export function configureStore(initialState = {}) {
    return createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? testDataService : dataService
        ))
    )
}

export const store = configureStore();