import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

import api from '../api/GetData';
import "../styles/profile.css"


function Profile() {

    const [currentUser, setCurrentUser] = useState([]);
    const [profile, setProfile] = useState([]);
    const [subscribtions, setSubscribtions] = useState([]);
    const [subscribed, setSubscribed] = useState([]);

    let { username } = useParams();

    const getCurrentUserData = () => {
        api.getCurrentUser().then(result => {
            setCurrentUser(result.data);
        })
    }

    const getUserData = (nickname) => {
        api.getUser(nickname).then(result => {
            setProfile(result.data);
        })
    }

    const getSubscibtionsData = (nickname) => {
        api.getSubscibtions(nickname).then(result => {
            setSubscribtions(result.data);
        })
    }

    const getSubscibedData = (nickname) => {
        api.getSubscibed(nickname).then(result => {
            setSubscribed(result.data);
        })
    }

    const ban = (userName) => {
        console.log(userName)
        api.postBan(userName);
    }

    useEffect(() => {
        getCurrentUserData();
        getUserData(username);
        getSubscibtionsData(username);
        getSubscibedData(username);
    }, [username]);

    return(
        <div className="user">
            {(profile.nickname === currentUser.nickname) ? (
                <div className="profile">
                    <div className="profile-main">
                        <h3>My profile</h3>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                        <h2>{ profile.nickname }</h2>
                    </div>
                    <div className="profile-add">
                        <div className="profile-button">
                            <Link to='/upload'>
                                <button>+ Upload video</button>
                            </Link>
                        </div>
                        <div className="subscribtions">
                            <h2>Subscribtions</h2>
                            {subscribtions.map(subscribtion =>
                                <div key={subscribtion.id} className="subscribtion">
                                    <Link className="video-user-link" to={'/profile/' + subscribtion.subscribed_to.nickname}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                                        <p>{ subscribtion.subscribed_to.nickname }</p>
                                    </Link>
                                    <div className="subscribtion-actions">
                                        <button>Subscribed</button>
                                        <button onClick={() => ban(subscribtion.subscribed_to.nickname)}>Ban</button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="subscribtions">
                            <h2>Subscribed</h2>
                            {subscribed.map(subscribtion =>
                                <div key={subscribtion.id} className="subscribtion">
                                    <Link className="video-user-link" to={'/profile/' + subscribtion.subscriber.nickname}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                                        <p>{ subscribtion.subscriber.nickname }</p>
                                    </Link>
                                    <div className="subscribtion-actions">
                                        <button>Subscribe</button>
                                        <button onClick={() => ban(subscribtion.subscriber.nickname)}>Ban</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="profile">
                    <div className="profile-main">
                        <h3>Profile</h3>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                        <h2>{ profile.nickname }</h2>
                    </div>
                    <div className="profile-add">
                        <div className="profile-button">
                            <Link to={'/chat/' + profile.nickname + '_' + currentUser.nickname }>
                                <button>Text { profile.nickname }</button>
                            </Link>
                        </div>
                        <div className="subscribtions">
                            <h2>Subscribtions</h2>
                            {subscribtions.map(subscribtion =>
                                <div key={subscribtion.id} className="subscribtion">
                                    <Link className="video-user-link" to={'/profile/' + subscribtion.subscribed_to.nickname}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                                        <p>{ subscribtion.subscribed_to.nickname }</p>
                                    </Link>
                                    <div className="subscribtion-actions">
                                        <button>Subscribed</button>
                                        <button onClick={() => ban(subscribtion.subscribed_to.nickname)}>Ban</button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="subscribtions">
                            <h2>Subscribed</h2>
                            {subscribed.map(subscribtion =>
                                <div key={subscribtion.id} className="subscribtion">
                                    <Link className="video-user-link" to={'/profile/' + subscribtion.subscriber.nickname}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                                        <p>{ subscribtion.subscriber.nickname }</p>
                                    </Link>
                                    <div className="subscribtion-actions">
                                        <button>Subscribe</button>
                                        <button onClick={() => ban(subscribtion.subscriber.nickname)}>Ban</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>    
    )
}

export default Profile;