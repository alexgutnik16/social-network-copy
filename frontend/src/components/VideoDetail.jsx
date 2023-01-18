import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import Comments from "./Comments";
import api from '../api/GetData';
import { setVideo, removeVideo } from "../redux/actions/videoActions";
import { setComments, removeComments } from '../redux/actions/commentActions';
import '../styles/video.css';


function VideoDetail() {

    const baseUrl = 'http://127.0.0.1:8000';

    const { videoId } = useParams();

    let video = useSelector((state) => state.video);
    let comments = useSelector((state) => state.comments);

    const dispatch = useDispatch();

    useEffect(() => {
        if (videoId && videoId !== "") {
            api.getComments(videoId).then(result => {
                dispatch(setComments(result.data));
            })
        }
        return () => {
            dispatch(removeComments())
        };
    }, [videoId]);

    useEffect(() => {
        if (videoId && videoId !== "") {
            api.getVideo(videoId).then(result => {
                dispatch(setVideo(result.data));
            })
        }
        return () => {
            dispatch(removeVideo())
        };
    }, [videoId]);
    
    const like = (postId) => {
        api.postLike(postId)
        // document.getElementById("like").style.backgroundColor = "#BB2649";
    }

    const subscribe = (userName) => {
        api.postSubscibtion(userName);
    }

    return(
        <React.Fragment>
        {Object.keys(video).length === 0  ? (
            <div className="no-data">
                <h2>No data</h2>
            </div>
        ) : (
            <div className="data">
                <div className="video">
                    <div className="video-main">
                        <div className="video-user">
                            <Link className="video-user-link" to={'/profile/' + video.videos.author.nickname}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img> 
                                <h2>{ video.videos.author.nickname }</h2>
                            </Link>  
                            <button onClick={() => subscribe(video.videos.author.nickname)}>Subscribe</button> 
                        </div>
                        <video width="750" height="500" controls preload="metadata">
                            <source src={ baseUrl + video.videos.video } type="video/mp4"/>
                        </video> 
                    </div>
                    <div className="video-data">
                        <div className="video-info" >
                            <h3>{ video.videos.heading }</h3>
                            <p>{ video.videos.text }t</p> 
                            <div id="like" className="like-button" onClick={() => like(video.videos.id)}>
                                <img src="https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/like-106.png"/>
                            </div>
                        </div>
                        {Object.keys(comments).length === 0  ? (
                            <div className="no-data">
                                <h2>No data</h2>
                            </div>
                        ) : (
                            <Comments comments={comments} key={video.videos.id}/>
                        )}
                    </div> 
                </div>
            </div>
        )}
        </React.Fragment>  
    );
};

export default VideoDetail;