import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import { loadStripe } from '@stripe/stripe-js';
import STRIPE_PUBLISHABLE_KEY from '../stripe/key';
import BbsPrices from '../stripe/bbs-prices';
import { patchAccount } from '../redux/account/account.action';

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);


const BuyBbs = () => {
    const form = useRef();

    const account = useSelector(state => state.accountReducer)
    const dispatch = useDispatch();
    const [completedSuccess, setCompletedSuccess] = useState(false)
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

    // const handleClick = async (event) => {
    //     const stripe = await stripePromise;
    //     const { error } = await stripe.redirectToCheckout({
    //             lineItems: [{
    //                 price: bbsPrice,
    //                 quantity: parseInt(quantity, 10),
    //             }],
    //             mode: 'payment',
    //             successUrl: 'http://127.0.0.1:3000',
    //             cancelUrl: 'http://127.0.0.1/acheter-des-bbs',
    //             customerEmail : account.email
    //         }).then( res => console.log(res) );
    
    //     console.log('toto')
    //     console.log(stripe)
    //     if(!error) {
    //         console.log('caca')
    //         setCompletedSuccess(true)
    //     }
        
    // }


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
                cancelUrl: 'http://127.0.0.1/acheter-des-bbs',
                customerEmail : account.email
            }).then( res => console.log(res) );
    
        console.log('toto')
        console.log(stripe)
        if(!error) {
            console.log('caca')
            const data = {
                bb : 56
            }
            console.log(data.bb)
            dispatch(patchAccount(data))
           
        }
    }


    return ( 
        <div className="container position-relative px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    <div className="post-heading text-center">
                        <h1>Choisissez votre quantité</h1>
                        <p>Le tarif est dégressif en fonction des paliers suivants : </p>
                        <p>Jusqu'à 49 Bb's { element } <span> 1 Bb's = 1€</span></p>
                        <p>De 50 à 99 Bb's { element } <span> 1 Bb's = 0.98€</span></p>
                        <p>De 100 à 199 Bb's { element } <span> 1 Bb's = 0.95€</span></p>
                        <p>De 200 à 499 Bb's { element } <span> 1 Bb's = 0.90€</span></p>
                        <p>A partir de 500 Bb's { element } <span> 1 Bb's = 0.86€</span></p>                    
                        <Form onSubmit={handleSubmit} ref={form}>
                            <div className="card ">
                                <div className="card-body">
                                    <div className="card-title d-flex flex-row justify-content-center">
                                        <div className="p-2">Je souhaite acheter :</div>
                                        <div className="p-2"><Input className="form-control form-control-inline" type="text" value={quantity} onChange={handleChange} /></div>
                                        <div className="p-2"> Bbs</div>
                                    </div>
                                    <p className="card-text">Pour un montant de : <span>{(valueBbs*quantity).toFixed(2)}</span> €</p>
                                    <Input role="link" className="nav-link btn btn-warning w-100" type="submit" value="J'achète des Bb's"/>
                                </div>
                            </div>    
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyBbs