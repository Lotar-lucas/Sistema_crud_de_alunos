const express = require('express');
const bodyParser = require('body-parser');
// const errormiddleware = require('../middlewares/errormiddleware');

const studentsRoutes = require('../routers/studentsRoutes');

const app = express();
app.use(bodyParser.json());

// rotas
app.use('/students', studentsRoutes);

module.exports = app;
