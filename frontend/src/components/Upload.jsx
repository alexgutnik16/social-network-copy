import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from '../api/GetData';
import '../styles/upload.css';


function Upload() {

    const [video, setVideo] = useState(null);
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');

    const formData = new FormData();
    formData.append("video", video);
    formData.append("heading", heading);
    formData.append("text", description);

    let navigate = useNavigate();
 
    const handleFileChange = (e) => {
        setVideo(e.target.files[0]);
    }

    const handleHeadingChange = (e) => {
        setHeading(e.target.value);
    }

    const handleTextChange = (e) => {
        setDescription(e.target.value);
    }

    const uploadVideo = (e) => {
        e.preventDefault();
        api.postVideo(formData);
        navigate('/');
    }

    return(
        <div className="upload">
            <h2>Upload Video</h2>
            <form method="post">
                <input type="file"
                    name="video"
                    placeholder="Upload video"
                    onChange={ handleFileChange }
                />
                <input type="text" 
                    name="heading"
                    placeholder="Heading"
                    onChange={ handleHeadingChange }
                />
                <input type="text" 
                    name="description"
                    placeholder="Description"
                    onChange={ handleTextChange }
                />
                <button onClick={ uploadVideo }>Submit</button>
            </form>
        </div>
    )
}

export default Upload;