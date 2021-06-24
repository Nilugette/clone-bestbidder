import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"


const Footer = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <nav className="navbar navbar-expand-md justify-content-center navbar-dark fixed-bottom bg-dark">
                        <ul className="navbar-nav">
                            {
                                 !currentUser? (
                                     <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/auth/inscription">Créer mon compte</Link>
                                        </li>
                                     </>
                                 ): ("") 
                            }
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Afficher par catégorie</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Toutes les enchères</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/acheter-des-bbs">Acheter des Bb's</Link>
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