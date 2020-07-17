const main = require('express').Router();

// login/Landing page
main.get('/', (req, res) => {
   res.send('login')
})

// Dashboard
main.get('/dashboard', (req, res) => {
    res.send('dashboard')
})

module.exports = main