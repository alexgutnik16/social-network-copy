import { ActionTypes } from "../constants/actionTypes";

export const setUser = (user) => {
    return {
        type: ActionTypes.SET_USER,
        payload: user
    };
};

export const removeUser = () => {
    return {
        type: ActionTypes.REMOVE_USER,
    };
};

export const setCurrentUser = (currentUser) => {
    return {
        type: ActionTypes.SET_CURRENT_USER,
        payload: currentUser
    };
};

export const removeCurrentUser = () => {
    return {
        type: ActionTypes.REMOVE_CURRENT_USER,
    };
};