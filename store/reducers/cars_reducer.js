import { List, Map, fromJS } from 'immutable'
import { SAVE_DATA } from "../actions/action_types";

const initialState = Map({
    data: null,
});

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_DATA: {
            return state.set('data', action.payload);
        }

        default:
            return state;
    }
};

export default carReducer;