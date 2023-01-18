import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    currentUser: {
        'id': '',
        'nickname': ''
    }
};

export const currentUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CURRENT_USER:
            return {...state, user: payload };
        case ActionTypes.REMOVE_CURRENT_USER:
            return null;
        default:
            return state;
    };
};



export const userReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USER:
            return {...state, user: payload };
        case ActionTypes.REMOVE_USER:
            return null;
        default:
            return state;
    };
};