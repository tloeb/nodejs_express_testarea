var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var hostValidation = require('host-validation');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Protection against DNS Rebind attacks
app.use(hostValidation({ hosts: ['127.0.0.1:3000',
                                 'localhost:3000'] }))

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
