const router = require('express').Router();
const user = require('./user');
const localAuth = require('./localAuth');

//User routes
router.use('/users', user);

//router.use('/user', post)

//Authorization using local passport
router.use('/', localAuth);

module.exports = router;