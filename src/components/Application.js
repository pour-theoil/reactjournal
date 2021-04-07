import React from "react"
import { Route } from "react-router-dom"
import { AboutMe } from "./AboutMe"
import { EntryList } from "./journal/JournalList"
import { EntryForm } from "./journal/EntryForm"

export const Application = () => {
    return (
        <>
            
            <Route exact path="/">
                <AboutMe />
            </Route>

            <Route exact path="/journal">
                <EntryList />
            </Route>
            
            <Route exact path="/journal/create">
                <EntryForm />
            </Route>
        </>
    )
}