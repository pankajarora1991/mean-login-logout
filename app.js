const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require("cors");


const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const usersRouter = require('./routes/users');

app.use('/api', usersRouter);
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('public/index.html', { root: __dirname });
});

module.exports = app;
