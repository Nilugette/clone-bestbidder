import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom"
import { logout } from '../redux/authentication/auth.action';

const MyAccount = () => {
    const account = useSelector(state => state.accountReducer)

    const dispatch = useDispatch();

    const logOut = () => {
      dispatch(logout());
    };
  



    return (
        <div className="container">
            <header className="jumbotron">
                <h3>Complétez ou modifiez vos informations</h3>
            </header>

            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail">Votre email</label>
                        <input type="email" className="form-control" id="inputEmail" value={account.email}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputNickname">Votre pseudo</label>
                        <input type="text" className="form-control" id="inputNickname" value={account.nickname}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputMobile">Votre n° de mobile</label>
                        <input type="tel" className="form-control" id="inputMobile" value={account.phone} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputFirstName">Votre prénom</label>
                        <input type="text" className="form-control" id="inputFirstName" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCountry">Votre pays</label>
                        <input type="text" className="form-control" id="inputCountry" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputLastName">Votre nom</label>
                        <input type="text" className="form-control" id="inputLastName" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">Votre ville</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputTitle">Votre Civilité</label>
                        <select id="inputTitle" class="form-control">
                            <option selected>Mme</option>
                            <option>M.</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputZip">Votre code postal</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputBirthDate">Votre date de naissance</label>
                        <input type="date" className="form-control" id="inputBirthDate" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddress">Votre adresse</label>
                        <input type="text" className="form-control" id="inputAddress" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputChangePassword">Mot de Passe</label>
                        <input type="submit" className="form-control btn btn-warning" id="inputChangePassword" value="Changer" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddressDetail">Complément d'adresse</label>
                        <input type="text" className="form-control" id="inputAddressDetail" />
                    </div>
                </div>
            
                <button type="submit" className="btn btn-warning">Je modifie</button>
            </form>
        <Link className="nav-link btn btn-secondary w-25" to="/auth/connexion"  onClick={logOut}>Se déconnecter</Link>
        </div>
    );
};

export default MyAccount;