import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from '../api/GetData';
import '../styles/chat.css'

function Chat() {
    
    let { chatName } = useParams();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        api.getChat(chatName).then(result => {
            console.log(result.data)
            (setMessages(result.data));
    	})
    }, []);

    // const sendMessage = () => {

    // }

    const handleChange = (e) => {
        setMessages(e.target.value);
    }

    return(
        <div className="messages">
            <h2>{ chatName }</h2>
            {messages.map(message => <p key={message.id}>{ message.user.nickname }: { message.text } </p> )} 
            <form method="post">
                <input type="text" 
                    name="text"
                    placeholder=""
                    onChange={ handleChange }
                />
            </form>
        </div>
    )
}

export default Chat;