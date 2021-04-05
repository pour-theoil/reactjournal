import React from "react"
import { Route } from "react-router-dom"
import { AboutMe } from "./AboutMe"

export const Application = () => {
    return (
        <>
            
            <Route exact path="/">
                <AboutMe />
            </Route>
            
        </>
    )
}