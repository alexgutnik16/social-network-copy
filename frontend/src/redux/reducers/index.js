import { combineReducers } from 'redux';
import { recVideosReducer, subVideosReducer, videoReducer } from './videoReducer';
import { commentsReducer } from './commentReducer';
import { userReducer, currentUserReducer } from './userReducer';

const reducers = combineReducers({
    recVideos: recVideosReducer,
    subVideos: subVideosReducer,
    video: videoReducer,
    comments: commentsReducer,
    // user: userReducer,
    // currentUser: currentUserReducer,
});

export default reducers;