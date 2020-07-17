const express = require('express');
const morgan = require('morgan');
const router = require('./routes/router');
const app = express();

const PORT = process.env.PORT || 8080;

// pulling routes
app.use('/', router);
app.use(morgan('dev'))

app.listen(PORT, () => console.log(`app listing on port ${PORT}`));