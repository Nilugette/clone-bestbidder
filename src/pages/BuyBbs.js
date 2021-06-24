import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const BuyBbs = () => {
    const [valueBbs, setValueBbs] = useState(10)
    const element = <FontAwesomeIcon icon={faArrowRight} />

    const handleChange = (e) => {
        e.preventDefault()

        const targetValue = e.target.value
        if(targetValue > 500) {
            setValueBbs((targetValue*0.86).toFixed(2))
        } else if(targetValue > 199) {
            setValueBbs((targetValue*0.90).toFixed(2)) 
        } else if(targetValue > 99) {
            setValueBbs((targetValue*0.95).toFixed(2)) 
        } else if(targetValue > 49) {
            setValueBbs((targetValue*0.98).toFixed(2)) 
        } else {
            setValueBbs(targetValue)
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
                        <div class="card ">
                            <div class="card-body">
                                <h5 class="card-title d-flex flex-row justify-content-center">Je souhaite acheter : <input className="form-control w-25" id="ex1" type="text" defaultValue={valueBbs} onChange={handleChange} ></input> Bbs</h5>
                                <p class="card-text">Pour un montant de : <span>{valueBbs}</span> €</p>
                                <Link className="nav-link btn btn-warning" to="#" >
                                        J'achète des Bb's
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyBbs