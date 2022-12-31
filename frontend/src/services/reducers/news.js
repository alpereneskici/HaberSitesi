import {
    SET_NEWS
} from '../actions/types';

const initialState = {
    news:[]
};

export default function (state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case SET_NEWS:
            return{
                ...state,
                news:payload
            }
        default:
            return state
    }
};
