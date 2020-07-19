const main = require('express').Router();

// display login page
main.get('/', (req, res) => {
   res.send('login')
})

// Dashboard
main.get('/dashboard', (req, res) => {
    res.send('dashboard')
})

module.exports = main