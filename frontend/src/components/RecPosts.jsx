import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Video from "./Video";
import api from '../api/GetData';
import { setRecVideos } from '../redux/actions/videoActions';
import "../styles/posts.css";


function RecPosts() {
    const recVideos = useSelector((state) => state.recVideos.videos);
    const dispatch = useDispatch();

    useEffect(() => {
        api.getRecVideos().then(result => {
            dispatch(setRecVideos(result.data));
    	})
    }, []);

    return(
        <div className="posts">
            {recVideos.map(video => <Video video={video} key={video.id}/>)}
        </div>
    )
}

export default RecPosts;