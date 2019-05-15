const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

module.exports = app => {
   // middleware will get called in the order specified (left to right)
   app.get('/api/surveys', requireLogin, requireCredits, (req, res) => {

   });
}