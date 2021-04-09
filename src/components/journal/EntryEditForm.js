import React, { useState, useEffect } from 'react'
import {useParams, useHistory } from 'react-router-dom'
import { updateEntry, getSingleEntry } from '../../modules/EntryManager'
import { getMoods } from "../../modules/MoodManager"

export const EntryEditForm = () => {
    const [entry, setEntry] = useState({   title: "",
    date: "",
    description: "",
    technologyTag: "",
    moodId: 0,
    userId: 1})
    console.log("entryedit")
    const [isLoading, setIsLoading] = useState(false)
    const [mood, setMood] = useState([])
    const {entryId} = useParams();
    const history = useHistory();
    


    const getAllMoods = () => {
        return getMoods().then(moodsFromAPI => {
            setMood(moodsFromAPI)
        })
    }

    useEffect(()=> {
        getAllMoods(setMood)
    }, [])

    const handleFieldChange = evnt => {
        const stateToChange = { ...entry}
        stateToChange[evnt.target.id] = evnt.target.value;
        setEntry(stateToChange);
    };

    const updateExistingEntry = evnt => {
        evnt.preventDefault()
        setIsLoading(true);
        const editedEntry = {
            id: entryId,
            title: entry.title,
            date: entry.date,
            description: entry.description,
            technologyTag: entry.technologyTag,
            moodId: entry.moodId,
            userId: entry.userId
        }
        updateEntry(editedEntry)
            .then(()=> history.push("/journal"))
    }

    useEffect(() => {
        getSingleEntry(entryId)
            .then(entry => {
                setEntry(entry);
                setIsLoading(false);
            });
    }, [entryId]);
    
    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input 
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="title"
                            value={entry.title}
                        />
                        <label htmlFor="title">Title</label>
                        <select value={entry.moodId} name="moodId" id="moodId" onChange={handleFieldChange} className="form-control" >
						  {mood.map(l => (
							<option key={l.id} value={l.id}>
								{l.mood}
							</option>
						))}
				  	    </select>
                        <label htmlFor="moodId">Mood</label>
                        <label htmlFor="description">Description</label>
                        <textarea 
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="description"
                            value={entry.description}
                        />
                        
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingEntry}
                            className="btn btn-primary"
                         >Submit</button>
                        </div>
                </fieldset>
            </form>
        </>
    )
}