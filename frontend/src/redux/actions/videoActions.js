import { ActionTypes } from "../constants/actionTypes";

export const setRecVideos = (videos) => {
    return {
        type: ActionTypes.SET_REC_VIDEOS,
        payload: videos
    };
};

export const setSubVideos = (videos) => {
    return {
        type: ActionTypes.SET_SUB_VIDEOS,
        payload: videos
    };
};


export const setVideo = (video) => {
    return {
        type: ActionTypes.SET_VIDEO,
        payload: video
    };
};

export const removeVideo = () => {
    return {
        type: ActionTypes.REMOVE_VIDEO,
    };
};