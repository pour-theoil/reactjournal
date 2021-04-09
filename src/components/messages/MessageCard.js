import React from 'react'
import { Link } from 'react-router-dom'

export const MessageCard =({message, deleteMessage}) => {
    return (
    <article className="message-card"> 
        <h3 className="message-title">{message.title}</h3>
        <p className="message-date">{message.date}</p>
        <p className="message-message">{message.message}</p>
        <Link to={`/message/${message.id}/edit`}>
            <button>Edit</button>
        </Link>
        <button type="button" onClick={() => deleteMessage(message.id)}>Delete
        </button>
    </article>
    )
}