import {
    combineReducers
} from 'redux';

export const vulners = (state = {}, action) => {
    console.log(action, state);
    switch (action.type) {
        case 'LOAD_DATA_RECEIVED':
            return action;
        default:
            return state;
    }
};

export const reducers = combineReducers({
    vulners,
});