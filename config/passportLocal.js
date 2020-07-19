const LocalStrategy = require('passport-local');
const User = require('../models/User')

module.exports = function(passport) {
    passport.use(new LocalStrategy(
        (email, password, done) => {
          User.findOne({ email: email },  (err, user) => {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'That email is not registered' });
            }
            if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password' });
            }
            return done(null, user);
          });
        }
      ));

      passport.serializeUser((user, done) => done(null, user.id) );

      passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user));
      });
}