const { StatusCodes } = require('http-status-codes');
const studentsServices = require('../services/studentsServices');

const createStudent = async (req, res) => {
  try {
    const response = await studentsServices.createStudent(req.params, req.body);

    if (response.isError) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: response.message });
    }

    return res.status(StatusCodes.CREATED).json({ message: response.message });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllStudents = async (_req, res) => {
  try {
    const students = await studentsServices.getAll();
    return res.status(StatusCodes.OK).json(students);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const editStudent = async (req, res) => {
  try {
    const response = await studentsServices.editStudent(req.params, req.body);

    return res.status(StatusCodes.OK).json({ message: response.message });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const excludeStudent = async (req, res) => {
  try {
    const response = await studentsServices.excludeStudent(req.params);
    return res.status(StatusCodes.OK).json({ message: response.message });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  editStudent,
  excludeStudent,
};
