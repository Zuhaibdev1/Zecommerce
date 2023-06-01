import React from "react"
import { NavLink } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="container">
            <h1>Error: 404</h1>
            <h1>Page Not Found!</h1>
            <p>We're Sorry, The Page You Request Could Not Found.<br /> Please Go To The <NavLink to="/">Homepage</NavLink>. Or Contact Us At <a href="mailto: zuhaibdev@gmail.com">Zuhaibdev@gmail.com</a>.</p>
        </div>
    )
}