import React from "react"
import { Redirect, Route } from "react-router-dom"
import { AboutMe } from "./AboutMe"
import { EntryList } from "./journal/JournalList"
import { EntryForm } from "./journal/EntryForm"
import { EntryEditForm } from "./journal/EntryEditForm"
import { Register } from './auth/Register'
import { Login } from './auth/Login' 
import { MessageList}  from './messages/MessageList'

export const Application = ({setAuthUser, isAuthenticated}) => {
    return (
        <>
             <Route path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>

            <Route exact path="/reactjournal/">
                <AboutMe />
            </Route>

            <Route exact path="/journal">
                {isAuthenticated ? <EntryList /> : <Redirect to="/login" />}
            </Route>
            
            <Route exact path="/journal/create">
                <EntryForm />
            </Route>

            <Route exact path="/journal/:entryId(\d+)/edit">
                <EntryEditForm />
            </Route>

            <Route exact path="/messages">
                {isAuthenticated ? <MessageList /> : <Redirect to="/login" />}
            </Route>
        </>
    )
}