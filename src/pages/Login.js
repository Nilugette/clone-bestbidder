import React from 'react'

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

const Login = () => {
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
                            <label htmlFor="password">Indiquez votre mot de passe</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block">Je valide</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login