import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    videos: []
};

export const recVideosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_REC_VIDEOS:
            return {...state, videos: payload };
        default:
            return state;
    }
};

export const subVideosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_SUB_VIDEOS:
            return {...state, videos: payload };
        default:
            return state;
    }
};


export const videoReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_VIDEO:
            return {...state, videos: payload };
        case ActionTypes.REMOVE_VIDEO:
            return {};
        default:
            return state;
    }
};