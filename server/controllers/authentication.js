const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');
// config is just:
// module.exports = {
//   secret: 'someSecretHere'
// };

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  
  // Check if email and password provided
  if(!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }
  
  // Check if user exist
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err); }
    
    // If user exists, return error
    if (existingUser) { 
      return res.status(422).send({ error: 'Email is in use' });
    }
    
    // If user does not exist, create user
    const user = new User({
      email: email,
      password: password
    });
    user.save(function(err) {
      if (err) { return next(err); }
    });
  
    // Respond
    res.json({ token: tokenForUser(user) });
  });
};
