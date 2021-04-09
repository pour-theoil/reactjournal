import  React, { useState, useEffect } from 'react'
import { MessageCard } from './MessageCard'
import { getMessages, deleteMessage } from '../../modules/MessageManager'
import { useHistory } from 'react-router-dom';

export const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const history = useHistory();

    const getAllMessages = () => {
        return getMessages().then(entriesFromAPI => {
            setMessages(entriesFromAPI)
        });
    };

    const deleteSetMessage = (id) => {
        deleteMessage(id)
        .then(() => getMessages().then(setMessages))
    }

    useEffect(() => {
        getAllMessages();
    }, [])

    return(
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/message/create") }}>
                    Create message
                </button>
            </section>
            <div className="message-cards">
            {messages.map(message => <MessageCard message={message}
                                            key={message.id}
                                            deletePost={deleteSetMessage}/>)}
            </div>
        </>
    )
};