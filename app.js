require('dotenv').config()

const express = require('express');
const http = require('http');
const https = require('https');
var fs = require('fs')
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home-router');
const interestRouter = require('./routes/interests-router');
const languageRouter = require('./routes/languages-router');
const skillRouter = require('./routes/skills-router');
const projectRouter = require('./routes/projects-router');
const { query } = require('./config/database');

var cors = require('cors');


var options = {
    key: fs.readFileSync('certificates/ssl.key'),
    cert: fs.readFileSync('certificates/ssl.cert')
};

// Express is used for routing
const app = express();
const PORT = process.env.PORT || API_PORT;
// Enable CORS for all route
app.use(cors());
// Set up the body parser
app.enable('trust proxy');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/online_cv/interests', interestRouter);
app.use('/api/online_cv/languages', languageRouter);
app.use('/api/online_cv/skills', skillRouter);
app.use('/api/online_cv/projects', projectRouter);
app.use('/api/online_cv/home', homeRouter);
// Enable CORS for single route
// app.use('/api/online_cv/home', cors(), homeRouter);

// For the server
// app.listen(PORT, () => console.log('Server running at port : ' + PORT));
https.createServer(options, app).listen(PORT);