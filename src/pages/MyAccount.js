import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom"
import { patchAccount } from "../redux/account/account.action";
import { logout } from '../redux/authentication/auth.action';

const MyAccount = () => {
    const account = useSelector(state => state.accountReducer)
    const [editFirstName, setEditFirstName] = useState(account.first_name)
    const [editCountry, setEditCountry] = useState(account.country)
    const [editLastName, setEditLastName] = useState(account.last_name)
    const [editCity, setEditCity] = useState(account.city)
    const [editCivility, setEditCivility] = useState("Mme")
    const [editZipCode, setEditZipCode] = useState(account.zip_code)
    const [editBirthdate, setEditBirthdate] = useState(account.birthdate)
    const [editAddress, setEditAddress] = useState(account.address)
    const [editAddress2, setEditAddress2] = useState(account.address_2)
    const [editNotifEmail, setEditNotifEmail] = useState(false)
    const [editNotifSMS, setEditNotifSMS] = useState(false)

    const dispatch = useDispatch();

    const handlePatchAccount = async (e) => {
        e.preventDefault() 
        const patchAccountData = {
            bb: account.bb,
            email: account.email,
            email_validate: account.email_validate,
            id: account.id,
            nickname: account.nickname,
            optin_email: account.optin_email,
            optin_sms: account.optin_sms,
            phone: account.phone,
            phone_validate: account.phone_validate,
            total_auction: account.total_auction,
            total_buy: account.total_buy,
            total_waiting_action: account.total_waiting_action,
            first_name: editFirstName,
            country: editCountry,
            last_name: editLastName,
            city: editCity,
            civility: editCivility,
            zip_code: parseInt(editZipCode),
            bithdate: editBirthdate + "T00:00:00.000Z",
            address: editAddress,
            address_2: editAddress2,
            notifEmail: editNotifEmail,
            notifSMS: editNotifSMS
        }
        dispatch(patchAccount(patchAccountData))
      }

    const logOut = () => {
      dispatch(logout());
    };
  



    return (
        <div className="container">
            <header className="jumbotron">
                <h3>Complétez ou modifiez vos informations</h3>
            </header>

            <form  onSubmit={e => handlePatchAccount(e)}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail">Votre email</label>
                        <input type="email" className="form-control" id="inputEmail" defaultValue={account.email} name="email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputNickname">Votre pseudo</label>
                        <input type="text" className="form-control" id="inputNickname" defaultValue={account.nickname} name="nickname" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputMobile">Votre n° de mobile</label>
                        <input type="tel" className="form-control" id="inputMobile" defaultValue={account.phone} name="phone"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputFirstName">Votre prénom</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputFirstName" 
                            name="first_name" 
                            defaultValue={account.first_name}
                            onChange={ e => setEditFirstName(e.target.value)} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCountry">Votre pays</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputCountry" 
                            name="country"
                            defaultValue={account.country}
                            onChange={ e => setEditCountry(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputLastName">Votre nom</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputLastName" 
                            name="last_name" 
                            defaultValue={account.last_name}
                            onChange={ e => setEditLastName(e.target.value)} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">Votre ville</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputCity" name="city" 
                            defaultValue={account.city} 
                            onChange={ e =>setEditCity(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputTitle">Votre Civilité</label>
                        <select 
                            id="inputTitle" 
                            className="form-control" 
                            name="civility"
                            defaultValue={account.civility}
                            onChange={ e =>setEditCivility(e.target.value)} >
                                <option value="Mme">Mme</option>
                                <option value="M.">M.</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                        {/** 
                            Doesn't work even on Postman, the value is patched but not retrieve in the GET payload
                         **/} 
                    <div className="form-group col-md-6">
                        <label htmlFor="inputZip">Votre code postal</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputZip" 
                            name="zip_code"
                            defaultValue={account.zip_code}
                            onChange={ e => setEditZipCode(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                        {/** 
                            Via Postman, birthdate sent and received in specific format, mine is sent but not retrieve
                         **/} 
                        <label htmlFor="inputBirthDate">Votre date de naissance</label>
                        <input 
                        type="date" 
                        className="form-control" 
                        id="inputBirthDate" 
                        name="birthdate" 
                        defaultValue={account.birthdate}
                        onChange={ e => setEditBirthdate(e.target.value)} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddress">Votre adresse</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputAddress" 
                            name="address"
                            defaultValue={account.address}
                            onChange={ e => setEditAddress(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                        {/** 
                            TO DO :
                            Add a link to a new form to change password
                        **/} 
                        <label htmlFor="inputChangePassword">Mot de Passe</label>
                        <input type="submit" className="form-control btn btn-warning" id="inputChangePassword" value="Changer" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddressDetail">Complément d'adresse</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputAddressDetail" 
                        name="address_2"
                        defaultValue={account.address_2}
                        onChange={ e => setEditAddress2(e.target.value)} />
                    </div>
                </div>
                <div className="form-group">
                    {/** 
                        Doesn't work even on Postman, the value is patched but not retrieve in the GET payload
                     **/} 
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="gridCheck" 
                            name="notifEmail" 
                            value={account.notifEmail}
                            checked={editNotifEmail}
                            onChange={e => setEditNotifEmail(!editNotifEmail)}/>
                        <label className="form-check-label" htmlFor="gridCheck">
                            Je souhaite être informé par email de l'actualité de Bestbidder (nouvelles enchères, évènements...)
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    {/** 
                        Doesn't work even on Postman, the value is patched but not retrieve in the GET payload
                    **/} 
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="gridCheck" 
                            name="notifSMS"
                            value={account.notifSMS}
                            checked={editNotifSMS}
                            onChange={e => setEditNotifSMS(!editNotifSMS)} />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Je souhaite recevoir des notification par SMS de Bestbidder
                        </label>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-warning">Je modifie</button>
                </div>
                
            </form>
            <br/>
                <Link className="nav-link btn btn-secondary" to="/auth/connexion"  onClick={logOut}>Se déconnecter</Link>
        </div>
    );
};

export default MyAccount;