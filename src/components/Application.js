import React from "react"
import { Route } from "react-router-dom"
import { AboutMe } from "./AboutMe"
import { EntryList } from "./journal/JournalList"

export const Application = () => {
    return (
        <>
            
            <Route exact path="/">
                <AboutMe />
            </Route>

            <Route path="/journal">
                <EntryList />
            </Route>
            
        </>
    )
}