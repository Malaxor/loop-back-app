const passport = require('passport');
const mongoose = require('mongoose');
// extracting a model from mongoose: one argument signifies extraction; two arguments signify the creation of a class
const User = mongoose.model('User');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleClientID, googleClientSecret } = require('../config/keys');
// the user parameter is the existingUser found in the db
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
   const user = await User.findById(id);
   done(null, user);
});
passport.use(new GoogleStrategy({
   clientID: googleClientID,
   clientSecret: googleClientSecret,
   callbackURL: "/auth/google/callback",
   proxy: true
}, async (accessToken, refreshToken, profile, done) => { 
   // assume the user signing in is already in the database
   const existingUser = await User.findOne({ googleId: profile.id });
   if(existingUser) { 
      return done(null, existingUser); 
   }
   // if a user signs in for the first time, instantiate a User model, save it to the database
   const newUser = await new User({ googleId: profile.id }).save();
   done(null, newUser);
}));