const express = require('express');
const bodyParser = require('body-parser');

const studentsRoutes = require('../routers/studentsRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/students', studentsRoutes);

module.exports = app;
