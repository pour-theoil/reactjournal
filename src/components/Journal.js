import React from "react"
import { NavBar } from "./nav/NavBar.js"
import { Application } from "./Application"
import "./Journal.css"
import { Footer } from './Footer'

export const Journal = () => ( 
    <>
        <h1 className="header">Daily Journal</h1>
        <NavBar />
        <Application />
        <Footer />
    </>
)