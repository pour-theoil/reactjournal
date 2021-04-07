import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { createPost } from '../../modules/EntryManager'
import { getMoods } from '../../modules/MoodManager'

export const EntryForm = () => {
    const [entry, setEntry] = useState({
        title: "",
        date: "",
        description: "",
        technologyTag: "",
        mood: 0,
        userId: 1
    })

    const [technologyTag, setTechnologyTag] = useState([])
    const [mood, setMood] = useState([])

    const getAllMoods = () => {
        return getMoods().then(moodsFromAPI => {
            setMood(moodsFromAPI)
        })
    }
    const history = useHistory();

    const handleInputChange = (event) => {
        const newEntry = {...entry};
        let selectedValue = event.target.value
        if (event.target.id.includes("Id")) {
            selectedValue = parseInt(selectedValue)
        }
        newEntry[event.target.id] = selectedValue;
        setEntry(newEntry)
    }
    useEffect(()=> {
        getAllMoods(setMood)
    }, [])

    const handleSaveEntry = (event) => {
        event.preventDefault()

        const moodId = entry.moodId

        if (moodId === 0) {
            window.alert("Please select a Mood")
        } else {
            createPost(entry).then(() => history.push('/journal'))
        }
    }
    return (
        <form className="EntryForm">
            <h2 className="EntryForm__Title">New Journal Entry</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Entry Title:</label>
                    <input type="text" id="title" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Title" value={entry.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="technologyTag">Tech Tags:</label>
                    <input type="text" id="technologyTag" onChange={handleInputChange} required autoFocus className="form-control" placeholder="TechTags" value={entry.technologyTag} />
                </div>
            </fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="mood">How are you feeling: </label>
					<select value={entry.moodId} name="moodId" id="moodId" onChange={handleInputChange} className="form-control" >
						<option value="0">Select a mood</option>
						{mood.map(l => (
							<option key={l.id} value={l.id}>
								{l.mood}
							</option>
						))}
					</select>
				</div>
			</fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" id="description" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Description" value={entry.description} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
				onClick={handleSaveEntry}>
				Save Entry
          </button>
        </form>
    )

}