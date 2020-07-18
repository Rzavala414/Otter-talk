const express = require('express');
const morgan = require('morgan');
var bodyParser = require('body-parser')
const passport = require('passport');
const connectDB = require('./config/database')
const router = require('./routes/router');
const app = express();

// load in env keys
require('dotenv').config({ path: './config/keys.env' });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'));

//Passport strategies
require('./config/passportLocal')(passport);

//mongoDB connected
connectDB();


const PORT = process.env.PORT || 8080;



// pulling routes
app.use('/', router);


app.listen(PORT, () => console.log(`app listing on port ${PORT}`));