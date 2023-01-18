import React, { useState } from "react";
import { useParams } from 'react-router-dom';

import api from '../api/GetData';
import '../styles/comments.css'

function Comments(props) {

    const { videoId } = useParams();
    const comments = props.comments.comments;
    
    const [comment, setComment] = useState('');

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.length > 0) {
            api.postComment(videoId, {'text': comment});
        }
    	setComment('');
	}

    return(
        <div className="comments">
            <form method="post">
                <input type="text" 
                    name="text"
                    placeholder="Add comment"
                    onChange={ handleChange }
                    required
                />
                <button onClick={ handleSubmit }>Send</button>
            </form>
            {comments.map(comment => 
                <p key={comment.id}> {comment.user.nickname}: { comment.text } </p>
            )}  
        </div>
    )
}

export default Comments;