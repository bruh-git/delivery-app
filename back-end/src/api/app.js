const express = require('express');
// Iniciando o projeto

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
