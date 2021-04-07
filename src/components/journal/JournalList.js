import  React, { useState, useEffect } from 'react'
import { EntryCard } from './EntryCard'
import { getJournalEntries } from '../../modules/EntryManager'

export const EntryList = () => {
    const [entries, setEntries] = useState([])

    const getEntries = () => {
        return getJournalEntries().then(entriesFromAPI => {
            setEntries(entriesFromAPI)
        });
    };

    useEffect(() => {
        getEntries();
    }, [])

    return(
        <div className="entry-cards">
            {entries.map(entry => <EntryCard entry={entry}
                                            key={entry.id}/>)}
        </div>
    )
};