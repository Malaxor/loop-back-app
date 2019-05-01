const passport = require('passport');

module.exports = app => {
   app.get('/auth/google', passport.authenticate('google', { 
      scope: ['profile', 'email']
   }));
   app.get('/auth/google/callback', passport.authenticate('google'));
   
   app.get('/api/user', (req, res) => {
      res.send(req.user);
      // res.send(req.session); // this object contains the data that is contained within the cookie
   });
   app.get('/api/logout', (req, res) => {
      req.logout();
      res.send(req.user);
   });
}