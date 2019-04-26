const passport = require('passport');
const mongoose = require('mongoose');
// extracting a model from mongoose: one argument signifies extraction; two arguments signify the creation of a class
const User = mongoose.model('users');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


passport.use(new GoogleStrategy({
   clientID: keys.googleClientID,
   clientSecret: keys.googleClientSecret,
   callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
   new User({ googleId: profile.id }).save();
}));