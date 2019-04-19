const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({

}));
// id
"293055994795-c915pmk3bpsto5r2di77nh0onopp6027.apps.googleusercontent.com"
// secret
"fr3uavU95Jpa2AY8wWm0u8_J"
const port = process.env.PORT || 5000;
app.listen(port);