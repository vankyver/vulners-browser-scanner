import {
    combineReducers
} from 'redux';


export const settings = (state = {}, action) => {

    switch (action.type) {
        case 'CHANGE_SETTINGS':
            console.log('=======+>>', action)
            return Object.assign({}, state, action.settings);

        default:
            return state;
    }

};


export const data = (state = [], action) => {

    switch (action.type) {

        case 'LOAD_DATA_RECEIVED':
            return state.concat(action.data);

        default:
            return state;
    }

};

export const reducers = combineReducers({
    data,
    settings
});