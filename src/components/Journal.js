import React, {useState} from "react"
import { NavBar } from "./nav/NavBar.js"
import { Application } from "./Application"
import "./Journal.css"
import { Footer } from './Footer'

export const Journal = () => {
    const [isAuthenticated, setIsAutenicated] = useState(sessionStorage.getItem("journal__user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("journal__user", JSON.stringify(user))
        setIsAutenicated(sessionStorage.getItem("journal__user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAutenicated(sessionStorage.getItem("journal__user") !== null)
    }
    
    return (
    <>
        <h1 className="header">Daily Journal</h1>
        <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
        <Application setAuthUser={setAuthUser} isAuthenticated={isAuthenticated}/>
        <Footer />
    </>
    )
}