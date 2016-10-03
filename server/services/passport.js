const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config');


// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};


// Create JWT strategy
// payload in decoded JWT token
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if user ID in payload exists in database
  // If it does, call 'done' with that user
  // If it does not, call 'done' without a user object
  User.findById(payload.sub, function(err, user) {
    // false means we did not find user
    if (err) { return done(err, false); }
    
    if (user) {
      // let passport know that user exists
      done(null, user);
    } else {
      done(null, false);
    }
  });
});


// Tell passport to use this strategy
passport.use(jwtLogin);
