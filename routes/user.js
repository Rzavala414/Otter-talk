const user = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');

user.get('/register', (req, res) => {
    res.send('registration')
});

user.post('/register', (req, res) => {
    
    const {firstName, lastName, email, password, password2} = req.body;
    
    User.findOne({email: email})
    .then(user => {
        console.log(user)
        if(user){
            //User exists error
            return 'user already exists'
        } else{
            const newUser = new User({
                firstName,
                lastName,
                email,
                password
            })

          // Hash Password
          bcrypt.genSalt(10, (error, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {

                if(err) throw err;

                //Set password to hashed
                newUser.password = hash;

                // Save user
                newUser.save()
                    .then(user => res.send('you are now registered'))
                    .catch(err => console.log(err))
              })
          })
        }
    })
})




module.exports = user;