const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/database')
const mongoose = require('mongoose')
const router = require('./routes/router');

// load in env keys
require('dotenv').config({ path: './config/keys.env' });

//mongoDB connected
connectDB();

const app = express();

const PORT = process.env.PORT || 8080;

// pulling routes
app.use('/', router);
app.use(morgan('dev'))

app.listen(PORT, () => console.log(`app listing on port ${PORT}`));