import React from 'react'
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { postContact } from '../redux/contact/contact.action';



const ContactUs = () => {

    const dispatch = useDispatch();
    
    const validationSchema = Yup.object().shape({
        civility: Yup.string()
            .required('Champs requis'),
        subject: Yup.string()
            .required('Champs requis'),
        email: Yup.string()
            .required('Champs requis ')
            .email('Email invalide'),
        first_name: Yup.string()
            .required('Champs requis'),
        last_name: Yup.string()
            .required('Champs requis'),
        message: Yup.string()
            .required('Champs requis')
            
    });

    const { register, handleSubmit, formState, reset } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(validationSchema),
        shouldUnregister: true 
    });
    const { errors } = formState;

    const onSubmit =  (data,e) => {
            e.preventDefault()

            data = {
                civility: data.civility,
                subject: data.subject,
                email: data.email,
                last_name: data.last_name,
                first_name: data.first_name,
                message: data.message
            }
            
            dispatch(postContact(data))
            e.target.reset();
            
    }

    return (
        <>
            <div className="jumbotron text-center">
                    <h1 className="display-4">Contactez nous</h1>
                    <p className="lead">Une question ? N'hésitez pas !</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <div className="form-group">
                        <label htmlFor="inputTitle">Votre civilité *</label>
                            <select 
                                name="civility" 
                                id="inputTitle" 
                                className= {`form-control ${errors.civility ? 'is-invalid' : ''}`}
                                {...register('civility')}  >
                                <option value="Mme">Mme</option>
                                <option value="M.">M.</option>
                            </select>
                        <div className="invalid-feedback">{errors.civility?.message}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputFirstName">Votre prénom *</label>
                        <input 
                            name="first_name" 
                            id="inputFirstName" 
                            type="text" 
                            className= {`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                            {...register('first_name')} />
                        <div className="invalid-feedback">{errors.first_name?.message}</div>
                    </div>
                    <div className="form-group">
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
                    <div className="form-group">
                        <label htmlFor="inputEmail">Votre email *</label>
                        <input 
                            name="email" 
                            type="text" 
                            id="inputEmail"
                            className= {`form-control ${errors.email ? 'is-invalid' : ''}`}
                            {...register('email')} />
                        <div className="invalid-feedback">{errors.email?.message}</div>
                    </div>
                </section>

                <aside>
                    <div className="form-group">
                        <label htmlFor="inputSubject">Indiquez un sujet *</label>
                            <select 
                                name="subject" 
                                id="inputSubject" 
                                className= {`form-control ${errors.subject ? 'is-invalid' : ''}`}
                                {...register('subject')}  >
                                <option value="account">Mon compte</option>
                                <option value="registration">Inscription</option>
                                <option value="historical">Mes Bbs et mon historique</option>
                                <option value="auction">Les enchères</option>
                            </select>
                        <div className="invalid-feedback">{errors.subject?.message}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputMessage">Votre message *</label>
                        <textarea 
                            name="message" 
                            id="inputMessage" 
                            type="text" 
                            rows="8"
                            className= {`form-control ${errors.message ? 'is-invalid' : ''}`}
                            {...register('message')} />
                        <div className="invalid-feedback">{errors.message?.message}</div>
                    </div>
                </aside>
                <button type="submit" className="btn btn-warning custom-btn mt-5">Envoyer</button>        
            </form>
            <p className="text-center my-5"> * Champs obligatoire</p>
        </> 
    )
}

export default ContactUs