import {
    combineReducers
} from 'redux';

export const vulners = (state = {}, action) => {
    switch (action.type) {

        case 'LOAD_DATA_RECEIVED':
            return Object.assign({}, state, action);

        default:
            return state;
    }
};

export const reducers = combineReducers({
    vulners,
});