var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var hostValidation = require('host-validation');
var hostValidation = require('host-validation');

const helmet = require('helmet');
const https = require('https');
const fs = require('fs');

//Swagger ApiDoc
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Protection against DNS Rebind attacks which bypasses the browser same-origin policy
// https://github.com/brannondorsey/host-validation
app.use(hostValidation({ hosts: ['127.0.0.1:8443',
                                 'localhost:8443'] }))

// Setup security related HTTP Headers via helmet
app.use(helmet());

// Use HTTPS instead of HTTP
https.createServer({
    key: fs.readFileSync('certs/app-key.pem'),
    cert: fs.readFileSync('certs/app-cert.pem')
  }, app).listen(8443);

//Integrate Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
