import React from 'react'
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">BestBidder</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Accueil </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Mon compte</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Footer