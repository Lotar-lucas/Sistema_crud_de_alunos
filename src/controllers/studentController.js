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
  const students = await studentsServices.getAll();
  return res.status(StatusCodes.OK).json(students);
};

const editStudent = async (req, res) => {
  const message = await studentsServices.editStudent(req.params, req.body);
  return res.status(StatusCodes.OK).json(message);
};

const excludeStudent = async (req, res) => {
  const message = studentsServices.excludeStudent(req.params);
  return res.status(StatusCodes.OK).json(message);
};

module.exports = {
  createStudent,
  getAllStudents,
  editStudent,
  excludeStudent,
};
