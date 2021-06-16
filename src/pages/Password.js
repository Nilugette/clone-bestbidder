import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { patchAccount } from "../redux/account/account.action";

const vpassword = (value) => {
    if (value.length < 8 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 8 and 40 characters.
        </div>
      );
    }
  };

const vconfirmedPassword = (value) => {
    if (value.length < 8 || value.length > 40) {
        return (
        <div className="alert alert-danger" role="alert">
            The password must be between 8 and 40 characters.
        </div>
        );
    }
};

const Password = () => {

  //const account = useSelector(state => state.accountReducer)
  const [password, setPassword] = useState("")
  const [passwordConfirmed, setPasswordConfirmed] = useState("")

  const dispatch = useDispatch();

  const handlePatchAccountPassword = async (e) => {
    e.preventDefault() 
    if(password === passwordConfirmed) {
        const patchAccountPasswordData = {
            password: password,
        }
        dispatch(patchAccount(patchAccountPasswordData))
    } else {
        console.log("password and confirmed password doesn't match")
    }
  }

  
  return (
    <div className="container">
        <form  onSubmit={e => handlePatchAccountPassword(e)}>
            <div className="form-group text-center">
                <label htmlFor="newPassword">Indiquez votre nouveau mot de passe</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="newPassword" 
                    name="password"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}/>
            </div>
            <div className="form-group text-center">
                <label htmlFor="confirmedPassword">Confirmer votre nouveau mot de passe</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="confirmedPassword" 
                    name="confirmed_password" 
                    value={passwordConfirmed}
                    onChange={ e => setPasswordConfirmed(e.target.value)} />
            </div>

            <div className="text-center">
                <button type="submit" className="btn btn-warning">Je valide</button>
            </div>   
        </form>
    </div>
  );
};

export default Password;