import React from "react"
import { Route } from "react-router-dom"
import { AboutMe } from "./AboutMe"
import { EntryList } from "./journal/JournalList"
import { EntryForm } from "./journal/EntryForm"
import { EntryEditForm } from "./journal/EntryEditForm"

export const Application = () => {
    return (
        <>
            
            <Route exact path="/reactjournal/">
                <AboutMe />
            </Route>

            <Route exact path="/journal">
                <EntryList />
            </Route>
            
            <Route exact path="/journal/create">
                <EntryForm />
            </Route>

            <Route exact path="/journal/:entryId(\d+)/edit">
                <EntryEditForm />
            </Route>
        </>
    )
}