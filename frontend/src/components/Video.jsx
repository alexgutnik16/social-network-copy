import React from "react";
import { Link } from 'react-router-dom';

import api from '../api/GetData';
import '../styles/video.css';


function Video(props) {

    const baseUrl = 'http://127.0.0.1:8000';

    const like = (postId) => {
        api.postLike(postId)
        // document.getElementById("like").style.backgroundColor = "#BB2649";
    }

    const subscribe = (userName) => {
        api.postSubscibtion(userName);
    }

    return(
        <div className="video">
            <div className="video-main">
                <div className="video-user">
                    <Link className="video-user-link" to={'/profile/' + props.video.author.nickname }>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img> 
                        <h2>{ props.video.author.nickname }</h2>
                    </Link>
                    <button onClick={() => subscribe(props.video.author.nickname)}>Subscribe</button> 
                </div>
                <video controls preload="metadata">
                    <source src={ baseUrl + props.video.video } type="video/mp4"/>
                </video>
            </div>
            <div className="video-data">
                <div className="video-info" >
                    <Link to={'/video_detail/' + props.video.id}>
                        <h3>{ props.video.heading }</h3>
                    </Link>
                    <p>{ props.video.text }</p> 
                    <div id="like" className="like-button" onClick={() => like(props.video.id) }>
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/like-106.png" alt="like"/>
                    </div>
                </div>
            </div> 
        </div>
    );

};

export default Video;