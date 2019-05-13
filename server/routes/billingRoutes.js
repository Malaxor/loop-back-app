const { stripeSecretKey } = require('../config/keys');
const stripe = require('stripe')(stripeSecretKey);

module.exports = app => {
   
   app.post('/api/stripe', async(res, req) => {

      const charge = await stripe.charges.create({
         amount: 500,
         currency: 'usd',
         description: '$5 for five credits',
         source: body.req.id
      });
      
      req.user.credits += 5;
      const user = await req.user.save();
      res.send(user);
   });
}