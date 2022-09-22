require('express-async-errors');
const express = require('express');
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');
const productsRouter = require('./routes/productsRouter');
const errorHandler = require('./middlewares/error');

const app = express();
app.use(express.json());
 
app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/', productsRouter);
app.use((req, res, next, err) => errorHandler(req, res, next, err));

module.exports = app;
