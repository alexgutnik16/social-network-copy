import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import api from '../api/GetData';
import Video from "./Video";
import { setRecVideos } from '../redux/actions/videoActions';
import "../styles/search.css";


function Search() {

    const [inputSearch, setInputSearch] = useState("");

    const searchVideos = useSelector((state) => state.recVideos.videos);
    const dispatch = useDispatch();

    useEffect(() => {
        api.getRecVideos().then(result => {
            dispatch(setRecVideos(result.data));
    	})
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        setInputSearch(e.target.value.toLowerCase());
    };
    
    const filteredData = searchVideos.filter((el) => {
        if (inputSearch.length === 0) {
            return el;
        } else {
            return el.heading.toLowerCase().includes(inputSearch)
        }
    });

    return(
        <div className="search">
            <div className="search-input">
                <input type="text"
                    placeholder="Search video"
                    onChange={handleChange}
                    value={inputSearch}
                />
            </div>
            <div className="posts">
                {filteredData.map(video => <Video video={video} key={video.id}/>)}
            </div>
        </div>      
    )
}

export default Search;