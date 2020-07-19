const router = require('express').Router();
const user = require('./user');
const main = require('./index');
//User routes
router.use('/users', user);

//Landing page routes
router.use('/', main);

module.exports = router;