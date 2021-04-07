import React from 'react'
import { Link } from 'react-router-dom'

export const EntryCard =({entry, deletePost}) => {
    return (
    <article className="journal-card"> 
        <h3 className="journal-title">{entry.title}</h3>
        <p className="journal-date">{entry.date}   {entry.mood.mood}</p>
        <p className="journal-entry">{entry.description}</p>
        <p className="journal-tags">Tags:{entry.technologyTag}</p>
        <button type="button" onClick={() => deletePost(entry.id)}>Delete
        </button>
    </article>
    )
}