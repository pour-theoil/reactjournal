import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { createMessage } from '../../modules/MessageManager'

export const EntryForm = () => {
    const [message, setMessage] = useState({
        title: "",
        date: "",
        message: "",
        userId: ""
    })

    const history = useHistory();

    const handleInputChange = (event) => {
        const newMessage = {...message};
        let selectedValue = event.target.value
        if (event.target.id.includes("Id")) {
            selectedValue = parseInt(selectedValue)
        }
        newMessage[event.target.id] = selectedValue;
        setMessage(newMessage)
    }
    const handleSaveMessage = (event) => {
        event.preventDefault()
        createMessage(message).then(() => history.push('/journal'))
    
    }
    return (
        <form className="messageForm">
            <h2 className="messageForm__Title">New Journal message</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Message Title:</label>
                    <input type="text" id="title" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Title" value={message.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" id="description" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Description" value={message.description} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
				onClick={handleSaveMessage}>
				Save Message
          </button>
        </form>
    )

}