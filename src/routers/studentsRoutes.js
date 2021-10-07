const express = require('express');

const studentController = require('../controllers/studentController');

const router = express.Router();

// create
router.post('/:RA', studentController.createStudent);

// edit
router.put('/:RA');

// exclude
router.delete('/:RA');

// getAlll
router.get('/', studentController.getAllStudants);
module.exports = router;
