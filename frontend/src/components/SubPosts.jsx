import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Video from "./Video";
import api from '../api/GetData';
import { setSubVideos } from "../redux/actions/videoActions";
import '../styles/posts.css';


function SubPosts() {
    const subVideos = useSelector((state) => state.subVideos.videos);
    const dispatch = useDispatch();

    useEffect(() => {
        api.getSubVideos().then(result => {
            dispatch(setSubVideos(result.data));
    	})
    }, []);

    return(
        <div className="posts">
            {subVideos.map(video => <Video video={video} key={video.id}/>)}
        </div>
    )
}

export default SubPosts;