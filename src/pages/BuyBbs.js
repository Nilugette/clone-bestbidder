import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import { loadStripe } from '@stripe/stripe-js';
import STRIPE_PUBLISHABLE_KEY from '../stripe/key';
import BbsPrices from '../stripe/bbs-prices';
import { postBbs } from '../redux/buyBbs/buyBbs.action';

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);


const BuyBbs = () => {
    const form = useRef();

    const account = useSelector(state => state.accountReducer)
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [valueBbs, setValueBbs] = useState(1) 
    const [quantity, setQuantity] = useState(10)
    const [bbsPrice, setBbsPrice] = useState(BbsPrices.PRICE_UP_TO_FORTY_NINE);
    const element = <FontAwesomeIcon icon={faArrowRight} />

    const handleChange = (e) => {
        e.preventDefault()
        const targetValue = e.target.value
        if(targetValue >= 500 ) {
            setValueBbs(0.86)
            setBbsPrice(BbsPrices.PRICE_FROM_FIVE_HUNDRED)
        } else if(targetValue > 199) {
            setValueBbs(0.90) 
            setBbsPrice(BbsPrices.PRICE_UP_TO_FOUR_HUNDRED_NINETY_NINE)
        } else if(targetValue > 99) {
            setValueBbs(0.95) 
            setBbsPrice(BbsPrices.PRICE_UP_TO_ONE_HUNDRED_NINETY_NINE)
        } else if(targetValue > 49) {
            setValueBbs(0.98) 
            setBbsPrice(BbsPrices.PRICE_UP_TO_NINETY_NINE)
        } else {
            setValueBbs(1) 
            setBbsPrice(BbsPrices.PRICE_UP_TO_FORTY_NINE)
        }
        setQuantity(targetValue)
       
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
                lineItems: [{
                    price: bbsPrice,
                    quantity: parseInt(quantity, 10),
                }],
                mode: 'payment',
                successUrl: 'http://127.0.0.1:3000',
                cancelUrl: 'http://127.0.0.1:3000/acheter-des-bbs',
                customerEmail : account.email
            }).then( result => {
                console.log(result)
                if(!result.error.message) {
                    const data = {
                        qty: parseInt(quantity, 10)
                    }
                    dispatch(postBbs(data)) 
                }
            })
        console.log(error)
    }


    return ( 
        <div className="container position-relative px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    <div className="post-heading text-center">
                        <h1>Choisissez votre quantit??</h1>
                        <p>Le tarif est d??gressif en fonction des paliers suivants : </p>
                        <p>Jusqu'?? 49 Bb's { element } <span> 1 Bb's = 1???</span></p>
                        <p>De 50 ?? 99 Bb's { element } <span> 1 Bb's = 0.98???</span></p>
                        <p>De 100 ?? 199 Bb's { element } <span> 1 Bb's = 0.95???</span></p>
                        <p>De 200 ?? 499 Bb's { element } <span> 1 Bb's = 0.90???</span></p>
                        <p>A partir de 500 Bb's { element } <span> 1 Bb's = 0.86???</span></p>  
                        {!currentUser ?  (
                            <div className="card ">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3>Vous n'??tes pas connect??.</h3>
                                    </div>
                                    <p className="card-text">Vous devez vous identitfier pour acheter vos Bb's</p>
                                    <p className="card-text">Si vous n'??tes pas encore inscrit.e, b??n??ficiez de 5 Bb's offerts pour tester gratuitement</p>
                                    <div className="card-title d-flex flex-row justify-content-between">
                                        <Link className="nav-link btn btn-warning" to="/auth/connexion" >
                                                    Je me connecte
                                        </Link>
                                        <p>OU</p>
                                        <Link className="nav-link btn btn-warning" to="/auth/inscription" >
                                                    Je m'inscris
                                        </Link>
                                    </div>
                                </div>
                            </div>    
                        ) : (
                            <Form onSubmit={handleSubmit} ref={form}>
                                <div className="card ">
                                    <div className="card-body">
                                        <div className="card-title d-flex flex-row justify-content-center">
                                            <div className="p-2">Je souhaite acheter :</div>
                                            <div className="p-2"><Input className="form-control form-control-inline" type="text" value={quantity} onChange={handleChange} /></div>
                                            <div className="p-2"> Bbs</div>
                                        </div>
                                        <p className="card-text">Pour un montant de : <span>{(valueBbs*quantity).toFixed(2)}</span> ???</p>
                                        <Input role="link" className="nav-link btn btn-warning w-100" type="submit" value="J'ach??te des Bb's"/>
                                    </div>
                                </div>    
                            </Form>
                        )}            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyBbs