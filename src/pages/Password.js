import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { patchAccount } from "../redux/account/account.action";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";


const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
};

const vpassword = (value) => {
    if (value.length < 8 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 8 and 40 characters.
        </div>
      );
    }
};

const vdontMatch = () => {
  return (
    <div className="alert alert-danger" role="alert">
      it's doesn't match
    </div>
  );    
};


const Password = () => {
  const form = useRef();
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
       vdontMatch()
      }
  }
  
  return (
    <div className="container">
        <Form  onSubmit={e => handlePatchAccountPassword(e)} ref={form}>
            <div className="form-group text-center">
                <label htmlFor="newPassword">Indiquez votre nouveau mot de passe</label>
                <Input 
                    type="password" 
                    className="form-control" 
                    id="newPassword" 
                    name="password"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                    validations={[required, vpassword]}/>
            </div>
            <div className="form-group text-center">
                <label htmlFor="confirmedPassword">Confirmer votre nouveau mot de passe</label>
                <Input 
                    type="password" 
                    className="form-control" 
                    id="confirmedPassword" 
                    name="confirmed_password" 
                    value={passwordConfirmed}
                    onChange={ e => setPasswordConfirmed(e.target.value)}
                    validations={[required, vpassword, vdontMatch]} />
           
            </div>

            <div className="text-center">
                <button type="submit" className="btn btn-warning">Je valide</button>
            </div>   
        </Form>
    </div>
  );
};

export default Password;