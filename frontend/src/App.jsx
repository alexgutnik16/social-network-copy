import React, { Fragment } from "react";
import { Route, Routes } from 'react-router-dom';

import VideoDetail from "./components/VideoDetail";
import Header from "./components/Header";
import SubPosts from "./components/SubPosts";
import RecPosts from "./components/RecPosts";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Upload from "./components/Upload";
import Chat from "./components/Chat";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

function App() {
	return (
        <Fragment>
            <Header/>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<RecPosts/>} />
                <Route path='/subposts' element={<SubPosts/>}/>
                <Route path='/search' element={<Search/>}/>
                <Route path='/profile/:username' element={<Profile/>}/>
                <Route path='/video_detail/:videoId' element={<VideoDetail/>}/>
                <Route path='/upload' element={<Upload/>}/>
                <Route path='/chat/:chatName' element={<Chat/>}/>
            </Routes>
        </Fragment>
  	);
};

export default App;
