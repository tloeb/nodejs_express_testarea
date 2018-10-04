import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import users from './routes/users';
import mongoose from 'mongoose';
import * as swaggerUI from 'swagger-ui-express';

const swaggerDocument = require('./swagger.json');
const app = express();
app.disable('x-powered-by');

app.use(logger('dev', {
  skip: () => app.get('env') === 'test'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/userdata')

//Integrate Swagger
app.use('/api', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
// Routes
app.use('/users', users);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res
    .status(err.status || 500)
    .send(err.message);
});

export default app;