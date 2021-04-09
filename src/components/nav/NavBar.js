import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"


export const NavBar = ({clearUser, isAuthenticated}) => {
    const history = useHistory()

    const handleLogout = () => {
        clearUser();
        history.push('/');
    }
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
            {isAuthenticated
                ? <li className="navbar__item">
                    <span className="navbar_link" onClick={handleLogout}> Logout </span>
                </li>
                : <li className="navbar__item">
                    <Link className="navbar_link" to="/login">Login</Link>
                </li>}
        </ul>
    )
}