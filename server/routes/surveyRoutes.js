const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Survey = mongoose.model('Survey');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {
   // middleware will get called in the order specified (left to right)
   app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
      // survey input
      const { title, subject, body, recipients } = req.body;
      // new survey model
      const survey = new Survey({
         title,
         subject,
         body,
         recipients: recipients.split(',').map(email => ({ email: email.trim() })),
         _user: req.user.id,
         dateSent: Date.now()
      });
      const mailer = new Mailer(survey, surveyTemplate(survey));
      try {
         await mailer.send();
         await survey.save();
   
         req.user.credits -= 1;
         const user = await req.user.save();
         res.send(user);
      } 
      catch (err) {
         res.status(422).send(err);
      }
   });
}