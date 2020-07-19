const localAuth = require('express').Router();
const passport = require('passport');
const User = require('../models/User');


//Authenticate Login users
localAuth.post('/', (req, res, next) => {
    console.log(req.body)
    passport.authenticate('local', {
      successRedirect: '/public-feed',
      failureRedirect: '/'
    })(req, res, next);
});

// Dashboard
localAuth.get('/public-feed', (req, res) => {
    res.send('this is the public Feed')
})

module.exports = localAuth