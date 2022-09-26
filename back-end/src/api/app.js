require('express-async-errors');
const express = require('express');
const cors = require('cors');
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');
const errorHandler = require('./middlewares/error');

const app = express();
app.use(express.json());
app.use(cors());
 
app.use('/', loginRouter);
app.use('/', registerRouter);
app.use((req, res, next, err) => errorHandler(req, res, next, err));

module.exports = app;
