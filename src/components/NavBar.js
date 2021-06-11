import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { Button, Collapse } from 'react-bootstrap';
import { logout } from '../redux/authentication/auth.action';


const NavBar = () => {
    const [open, setOpen] = useState(false)

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
      };
    

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link className="navbar-brand" to="/">BestBidder</Link>
               
                <Button
                    onClick={() => setOpen(!open)}
                    className="navbar-toggler"
                    aria-controls="navbarCollapse"
                    aria-expanded={open}
                >
                    <span className="navbar-toggler-icon"></span>
                </Button>
                <Collapse in={open}>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto" id="navbar-content">
                            {!currentUser ? (
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/auth/connexion">Se connecter <span className="sr-only">(current)</span></Link>
                                </li>
                            ) : (
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/auth/connexion"  onClick={logOut}>Logout <span className="sr-only">(current)</span></Link>
                                </li>
                            )}
                            <li className="nav-item">
                                <Link className="nav-link" to="/auth/inscription">S'inscrire</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">Toutes les enchères</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Afficher par catégorie</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Acheter des Bb's</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Mode d'emploi</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">CGU, CGV et Mentions légales</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Contactez-nous</Link>
                            </li>
                        </ul>
                    </div>
                </Collapse>
                
            </nav>
        </div>
    )
}

export default NavBar