import React, { useState, useEffect} from "react";
import {Link, NavLink} from 'react-router-dom';

import api from '../api/GetData';
import "../styles/header.css"

function Header() {

    const [currentUser, setCurrentUser] = useState([]);
    const [loggedIn, setloggedIn] = useState(false);
    
    const getCurrentUserData = () => {
        api.getCurrentUser().then(result => {
            setCurrentUser(result.data);
            setloggedIn(true);
        })
    }

    useEffect(() => {
        getCurrentUserData();
    }, []);

    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return(
        <React.Fragment>
            <header className="header">
                <Link to='/' className="header-logo"><h2>Videos</h2></Link>
                <nav id="navigation">
                    <NavLink id='rec' to='/' className={({ isActive }) =>
                        isActive
                            ? "active"
                            : ""
                        }>Reccomended
                    </NavLink>
                    <NavLink id='sub' to='/subposts' className={({ isActive }) =>
                        isActive
                            ? "active"
                            : ""
                        }>Subscribtions
                    </NavLink>
                    <NavLink id='search' to='/search' className={({ isActive }) =>
                        isActive
                            ? "active"
                            : ""
                        }>Search
                    </NavLink>
                </nav>
                <div className="user">
                    {loggedIn ? (
                        <div className="user-logged-in">
                            <Link className="userinfo" to={'/profile/' + currentUser.nickname}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                                <h3>{ currentUser.nickname }</h3>
                            </Link>
                            <button onClick={() => setloggedIn(false)}>Log Out</button>
                        </div>
                    ) : (
                        <div className="user-logged-out">
                            <button onClick={() => setloggedIn(true)}>Register</button>
                            <button onClick={() => setloggedIn(true)}>Log In</button>
                        </div>
                    )}
                </div>
            </header>
            <div className="mobile-header">
                <Link to='/' className="header-logo"><h2>Videos</h2></Link>
                <div className="nav">
                    <span onClick={openNav}>&#9776; </span>
                    <div id="mySidenav" className="sidenav">
                        <div className="wrap-closebtn" onClick={closeNav}>
                            <a className="closebtn" href="javascript:void(0)">&times;</a>
                        </div>
                        <div className="sidenav-elements">
                            <NavLink id='rec' to='/' onClick={closeNav} className={({ isActive }) =>
                                isActive
                                    ? "active"
                                    : ""
                                }>Reccomended
                            </NavLink>
                            <NavLink id='sub' to='/subposts' onClick={closeNav} className={({ isActive }) =>
                                isActive
                                    ? "active"
                                    : ""
                                }>Subscribtions
                            </NavLink>
                            <NavLink id='search' to='/search' onClick={closeNav} className={({ isActive }) =>
                                isActive
                                    ? "active"
                                    : ""
                                }>Search
                            </NavLink>
                        </div>
                        <div className="user">
                                {loggedIn ? (
                                    <div className="user-logged-in">
                                        <Link onClick={ closeNav } className="userinfo" to={'/profile/' + currentUser.nickname}>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                                            <h3>{ currentUser.nickname }</h3>
                                        </Link>
                                        <button onClick={() => setloggedIn(false)}>Log Out</button>
                                    </div>
                                ) : (
                                    <div className="user-logged-out">
                                        <button onClick={() => setloggedIn(true)}>Log In</button>
                                    </div>
                                )}
                            </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
    )
}

export default Header;