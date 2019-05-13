const port = process.env.PORT || 5000;
const express = require('express');
const app = express();
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

app.listen(port);