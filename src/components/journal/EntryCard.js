import React from 'react'
import { Link } from 'react-router-dom'

export const EntryCard =({entry}) => {
    return (
    <article className="journal-card"> 
        <h3 className="journal-title">{entry.title}</h3>
        <p className="journal-date">{entry.date}   {entry.mood}</p>
        <p className="journal-entry">{entry.description}</p>
        <p className="journal-tags">Tags:{entry.technologyTag}</p>
    </article>
    )
}