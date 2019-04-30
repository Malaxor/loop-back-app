const passport = require('passport');
const mongoose = require('mongoose');
// extracting a model from mongoose: one argument signifies extraction; two arguments signify the creation of a class
const User = mongoose.model('users');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async(id, done) => {
   const user = await User.findById(id);
   done(null, user);
});

passport.use(new GoogleStrategy({
   clientID: keys.googleClientID,
   clientSecret: keys.googleClientSecret,
   callbackURL: "/auth/google/callback"
}, async(accessToken, refreshToken, profile, done) => { 

   const existingUser = await User.findOne({ googleId: profile.id });
   if(existingUser) { 
      return done(null, existingUser); 
   }
   const newUser = await new User({ googleId: profile.id });
   done(null, newUser);
}));