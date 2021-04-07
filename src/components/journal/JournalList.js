import  React, { useState, useEffect } from 'react'
import { EntryCard } from './EntryCard'
import { getJournalEntries, deletePost } from '../../modules/EntryManager'
import { useParams } from 'react-router';

export const EntryList = () => {
    const [entries, setEntries] = useState([]);


    const getEntries = () => {
        return getJournalEntries().then(entriesFromAPI => {
            setEntries(entriesFromAPI)
        });
    };

    const deleteSetPost = (id) => {
        deletePost(id)
        .then(() => getJournalEntries().then(setEntries))
    }

    useEffect(() => {
        getEntries();
    }, [])

    return(
        <div className="entry-cards">
            {entries.map(entry => <EntryCard entry={entry}
                                            key={entry.id}
                                            deletePost={deleteSetPost}/>)}
        </div>
    )
};