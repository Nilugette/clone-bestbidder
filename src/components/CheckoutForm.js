
import React from 'react';

import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  
    async function handleSubmit(e) {
      e.preventDefault();
  
      const { error, paymentMethod } = await stripe.createPaymentMethod(
        {
          type: 'card',
          card: elements.getElement(CardElement),
        },
      );
  
      if (error) {
        console.log(error);
      } else {
        console.log(paymentMethod);
      }
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type='submit' disabled={!stripe} className="nav-link btn btn-warning">
          J'achète des Bb's
        </button>
      </form>
    );
}

export default CheckoutForm
