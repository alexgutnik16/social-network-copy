import { ActionTypes } from "../constants/actionTypes";

export const setComments = (comments) => {
    return {
        type: ActionTypes.SET_COMMENTS,
        payload: comments
    };
};

export const removeComments = () => {
    return {
        type: ActionTypes.REMOVE_COMMENTS,
    };
};