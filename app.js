const express = require('express');
const bodyParser = require('body-parser');
const interestRouter = require('./routes/interests-router');
const { query } = require('./config/database');
// Express is used for routing
const app = express();
const PORT = process.env.PORT || 5000;

// Set up the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/online_cv/interests', interestRouter);


// For the server
app.listen(PORT, () => console.log('Server running at port : '+PORT));