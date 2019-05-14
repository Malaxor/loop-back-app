const { stripeSecretKey } = require('../config/keys');
const stripe = require('stripe')(stripeSecretKey);

module.exports = app => {
   
   app.post('/api/stripe', async(req, res) => {
      // if someone attempts to add credits without being logged in
      if(!req.user) {
         return res.status(401).send({ error: 'You must log in' });
      }
      const charge = await stripe.charges.create({
         amount: 500,
         currency: 'usd',
         description: '$5 for five credits',
         source: req.body.id
      });

      req.user.credits += 5;
      const user = await req.user.save();
      res.send(user);
   });
}