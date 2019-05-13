import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {

   render() {
      return (
         <StripeCheckout
            name="Loop Back App"
            description="$5 for five email credits" 
            amount={500}
            token={token => console.log(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
         >
         <button className='btn'>Add Credits</button>
         </StripeCheckout>
      );
   }
}
export default Payments;