import React from 'react'
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <nav className="navbar navbar-expand-md justify-content-center navbar-dark fixed-bottom bg-dark">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Créer mon compte</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Afficher par catégorie</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Toutes les enchères</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Acheter des Bb's</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Mode d'emploi</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer