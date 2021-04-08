import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar_link" to="/reactjournal">About Me</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar_link" to="/journal">Journal</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar_link" to="/messages">Messages</Link>
            </li>
        </ul>
    )
}