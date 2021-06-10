import React from 'react'

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import { isEmail } from "validator";

const Register = () => {
    return ( 
        <div className="container">
            <div className="col-md-12">
                <div className="card-container">
                    <Form >
                        <div className="form-group">
                            <label htmlFor="email">Indiquez votre email</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Indiquez votre numéro de mobile</label>
                            <Input
                                type="tel"
                                className="form-control"
                                name="phone"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Indiquez votre pseudo *</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Créez votre mot de passe (mini 8 car.)*</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
        
                            />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary btn-block">Je m'inscris</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Register