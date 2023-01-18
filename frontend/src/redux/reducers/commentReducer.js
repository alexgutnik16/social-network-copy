import { ActionTypes } from "../constants/actionTypes";

export const commentsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_COMMENTS:
            return { comments: payload };
        case ActionTypes.REMOVE_COMMENTS:
            return {};
        default:
            return state;
    };
};