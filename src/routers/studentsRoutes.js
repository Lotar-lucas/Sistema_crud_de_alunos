const express = require('express');

const studentController = require('../controllers/studentController');

const router = express.Router();

// create
router.post('/:RA', studentController.createStudent);

// edit
router.put('/:RA', studentController.editStudent);

// exclude
router.delete('/:RA', studentController.excludeStudent);

// getAlll
router.get('/', studentController.getAllStudents);
module.exports = router;
