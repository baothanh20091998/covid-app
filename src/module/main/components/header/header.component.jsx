import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.style.scss"

export default function Header() {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to="/" exact={true} className="navbar-brand" href="#">Covid App</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink activeClassName="active__link" to="/" exact={true}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active__link" to="/contact" exact={true}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
