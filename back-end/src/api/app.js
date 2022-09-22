require('express-async-errors');
const express = require('express');
const loginRouter = require('./routes/loginRouter');
const errorHandler = require('./middlewares/error');

const app = express();
app.use(express.json());
 
app.use('/', loginRouter);
app.use((req, res, next, err) => errorHandler(req, res, next, err));

module.exports = app;
