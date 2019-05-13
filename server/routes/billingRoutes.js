const { stripeSecretKey } = require('../config/keys');
const stripe = require('stripe')(stripeSecretKey);

module.exports = app => {
   app.post('/api/stripe', (res, req) => {
      stripe.charges.create({
         amount: 500,
         currency: 'usd',
         description: '$5 for five credits',
         source: body.req.id
      });
   });
}