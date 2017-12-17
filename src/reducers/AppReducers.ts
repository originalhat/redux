import {combineReducers} from 'redux-immutable';

const name = (state: string = '', action: any) => {
    switch (action.type) {
        case 'UPDATE_NAME':
            return action.name;
        default:
            return state;
    }
};

const counter = (state: number = 0, action: any) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            state = 1000
            return state;
        case 'DECREMENT_COUNTER':
            return state - 1;
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    name,
    counter
});
