import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom"
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { patchAccount } from "../redux/account/account.action";
import { logout } from '../redux/authentication/auth.action';


const formatDate = (value) => {
    let dateobj = new Date(value);
    let dateB = dateobj.toISOString();
    return dateB
 }
 
 const formatDateToNormal = (value) => {
    let dateN = new Date(value);
    return dateN.getFullYear()+'-' + (dateN.getMonth()+1) + '-'+dateN.getDate();
}
 
const MyAccount = () => {

    const account = useSelector(state => state.accountReducer)
  
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Champs requis ')
            .email('Email invalide'),
        nickname: Yup.string()
            .required('Champs requis'),
        phone: Yup.string()
            .required('Champs requis')
            .matches(/^(\+33|0033|0)(6|7)[0-9]{8}$/g, 'Numéro de mobile invalide'),
        first_name: Yup.string()
            .required('Champs requis'),
        last_name: Yup.string()
            .required('Champs requis'),
        country: Yup.string()
            .required('Champs requis'),
        city: Yup.string()
            .required('Champs requis'),
        civility: Yup.string()
            .required('Champs requis'),
        zip_code: Yup.string()
            .required('Champs requis'),
        birthdate: Yup.string()
            .required('Champs requis'),
        address: Yup.string()
            .required('Champs requis'),
        address_2: Yup.string(),
        notifEmail: Yup.bool(),
        notifSMS: Yup.bool()
            
    });


    const { register, handleSubmit, formState, control } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(validationSchema),
        defaultValues : {
            email: account.email,
            nickname: account.nickname,
            phone: account.phone,
            first_name: account.first_name,
            country: account.country,
            last_name: account.last_name,
            city: account.city,
            civility: account.civility,
            zip_code: account.zip_code,
            birthdate: formatDateToNormal(account.birthdate),
            address: account.address,
            address_2: account.address_2,
            notifEmail: account.notifEmail,
            notifSMS: account.notifSMS
        },
        shouldUnregister: false 
    });
    const { errors, isSubmitting} = formState;

    const dispatch = useDispatch();

    const handlePatchAccount = (data,e) => {
            e.preventDefault()

            const birthDate = formatDate(data.birthdate)

            data = {
                email: data.email,
                nickname: data.nickname,
                phone: data.phone,
                first_name: data.first_name,
                country: data.country,
                last_name: data.last_name,
                city: data.city,
                civility: data.civility,
                zip_code: data.zip_code,
                birthdate: birthDate,
                address: data.address,
                address_2: data.address_2,
                notifEmail: data.notifEmail,
                notifSMS: data.notifSMS
            }
            
            dispatch(patchAccount(data))
    }

    const logOut = () => {
      dispatch(logout());
    };

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>Complétez ou modifiez vos informations</h3>
            </header>

            <form onSubmit={handleSubmit(handlePatchAccount)}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail">Votre email *</label>
                            <input 
                                name="email" 
                                type="text" 
                                id="inputEmail"
                                className= {`form-control ${errors.email ? 'is-invalid' : ''}`}
                                {...register('email')} />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputNickName">Votre pseudo *</label>
                            <input 
                                name="nickname" 
                                type="text" 
                                id="inputNickName"
                                className= {`form-control ${errors.nickname ? 'is-invalid' : ''}`}
                                {...register('nickname')} />
                            <div className="invalid-feedback">{errors.nickname?.message}</div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputMobile">Votre n° de mobile *</label>
                        <input 
                            type="tel" 
                            id="inputMobile" 
                            name="phone"
                            className= {`form-control ${errors.phone ? 'is-invalid' : ''}`}
                            {...register('phone')} />
                        <div className="invalid-feedback">{errors.phone?.message}</div>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputFirstName">Votre prénom *</label>
                        <input 
                            name="first_name" 
                            id="inputFirstName" 
                            type="text" 
                            className= {`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                            {...register('first_name')} />
                        <div className="invalid-feedback">{errors.first_name?.message}</div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCountry">Votre pays *</label>
                        <input 
                            name="country" 
                            id="inputCountry" 
                            type="text" 
                            className= {`form-control ${errors.country ? 'is-invalid' : ''}`}
                            {...register('country')}  />
                        <div className="invalid-feedback">{errors.country?.message}</div>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputLastName">Votre nom *</label>
                        <input 
                            name="last_name" 
                            id="inputLastName" 
                            type="text" 
                            className= {`form-control ${errors.last_name ? 'is-invalid' : ''}`}
                            {...register('last_name')} 
                            />
                        <div className="invalid-feedback">{errors.last_name?.message}</div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">Votre ville *</label>
                        <input 
                            name="city" 
                            id="inputCity" 
                            type="text" 
                            className= "form-control"
                            {...register('city')} 
                             />
                        <div className="invalid-feedback">{errors.city?.message}</div>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputTitle">Votre Civilité *</label>
                            <select 
                                name="civility" 
                                id="inputTitle" 
                                className= {`form-control ${errors.civility ? 'is-invalid' : ''}`}
                                {...register('civility')}  >
                                <option value=""></option>
                                <option value="Mme">Mme</option>
                                <option value="M.">M.</option>
                            </select>
                        <div className="invalid-feedback">{errors.civility?.message}</div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputZip">Votre code postal *</label>
                        <input 
                            name="zip_code" 
                            id="inputZip" 
                            type="text" 
                            className= {`form-control ${errors.zip_code ? 'is-invalid' : ''}`}
                            {...register('zip_code')} 
                            />
                        <div className="invalid-feedback">{errors.zip_code?.message}</div>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputBirthDate">Votre date de naissance *</label>
                        <Controller
                            control={control}
                            name="birthdate"
                            className= {`form-control ${errors.birthdate ? 'is-invalid' : ''}`}
                            render={(props) => (
                                <DatePicker
                                  value={props.field.value} 
                                  onChange={(data) => {
                                      props.field.onChange(formatDateToNormal(data))
                                  }}
                                />
                            )}
                        />
                        <div className="invalid-feedback">{errors.birthdate?.message}</div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddress">Votre adresse *</label>
                        <input 
                            name="address" 
                            id="inputAddress" 
                            type="text" 
                            className= {`form-control ${errors.address ? 'is-invalid' : ''}`}
                            {...register('address')} 
                            />
                        <div className="invalid-feedback">{errors.address?.message}</div>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Mot de Passe</label>
                        <Link className="nav-link btn btn-warning" to="/changer-mot-de-passe" >
                            Changer
                        </Link>
                        
                    </div>
                </div>
                <div className="form-row">
                    
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddressDetail">Complément d'adresse</label>
                        <input 
                            name="address_2" 
                            id="inputAddressDetail" 
                            type="text" 
                            {...register('address_2')} 
                            className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="gridCheck" 
                            name="notifEmail" 
                            {...register('notifEmail')} 
                           />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Je souhaite être informé par email de l'actualité de Bestbidder (nouvelles enchères, évènements...)
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="gridCheck" 
                            name="notifSMS"
                            {...register('notifSMS')} 
                             />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Je souhaite recevoir des notification par SMS de Bestbidder
                        </label>
                    </div>
                </div>
                <div className="text-center">
                    <button disabled={isSubmitting} type="submit" className="btn btn-warning">Je modifie</button>
                </div>
            </form>
            <br/>
                <Link className="nav-link btn btn-secondary" to="/auth/connexion"  onClick={logOut}>Se déconnecter</Link>
        </div>
    );
};

export default MyAccount;