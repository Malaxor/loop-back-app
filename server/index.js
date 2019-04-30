const port = process.env.PORT || 5000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./routes/authRoutes')(app);
require('./models/User');
require('./services/passport');

const { mongoURI } = require('./config/keys');
mongoose.connect(mongoURI, { useNewUrlParser: true });

app.use(cookieSession({ 
   maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseonds
   keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

app.listen(port);