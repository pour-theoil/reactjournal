import  React, { useState, useEffect } from 'react'
import { EntryCard } from './EntryCard'
import { getJournalEntries, deletePost } from '../../modules/EntryManager'
import { useHistory } from 'react-router-dom';

export const EntryList = () => {
    const [entries, setEntries] = useState([]);
    const history = useHistory();

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
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/journal/create") }}>
                    Create entry
                </button>
            </section>
            <div className="entry-cards">
            {entries.map(entry => <EntryCard entry={entry}
                                            key={entry.id}
                                            deletePost={deleteSetPost}/>)}
            </div>
        </>
    )
};