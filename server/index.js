const port = process.env.PORT || 5000;
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const { mongoURI, cookieKey } = require('./config/keys');
// mongo model
require('./models/User');
// passport and google strategy setup
require('./services/passport');
mongoose.connect(mongoURI, { useNewUrlParser: true });
app.use(bodyParser.json());
// cookie session extracts the data out of the cookie, then assigns it to req.session
app.use(cookieSession({ 
   maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
   keys: [cookieKey]
}));
// passport uses the req.session data, and passes it to deserializeUser
app.use(passport.initialize());
app.use(passport.session());
// routes
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

/********************** Heroku Production Setup ****************************/
// having Express handle routes that are located inside the client folder
if(process.env.NODE_ENV === 'production') {
   // express will serve production assets (main.js or main.css)
   app.use(express.static('client/build'));
   // express will serve index.html if it doesn't recognize the route
   // last resort for responding to a route request that isn't located in any other folder
   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
}
/************************************************************************/
app.listen(port);