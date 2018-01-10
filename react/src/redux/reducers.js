import {
    combineReducers
} from 'redux';

export const data = (state = [], action) => {

    switch (action.type) {

        case 'LOAD_DATA_RECEIVED':
            return state.concat(action.data);

        case 'CLEAR_DATA':
            return [];

        default:
            return state;
    }

};

export const stat = (state = {}, action) => {

    switch (action.type) {

        case 'LOAD_DATA_RECEIVED':
            return Object.assign({}, state, action.stat);

        case 'CLEAR_DATA':
            return {};

        default:
            return state;
    }

};

export const settings = (state = {}, action) => {

    switch (action.type) {

        case 'LOAD_DATA_RECEIVED':
            return Object.assign({}, state, action.settings);

        case 'CHANGE_SETTINGS':
            return Object.assign({}, state, action.settings);

        default:
            return state;
    }

};

export const url = (state = '', action) => {

    switch (action.type) {
        case 'LOAD_DATA_RECEIVED':
            return action.url;

        default:
            return state;
    }

};

export const reducers = combineReducers({
    data,
    settings,
    stat,
    url
});