const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');
const studentsServices = require('../services/studentsServices');

const createStudent = async (req, res) => {
  const { error } = Joi.object(
    {
      username: Joi.string().required().not().empty(),
      email: Joi.string().required().not().empty(),
      cpf: Joi.string().required().not().empty(),
    },
  ).validate(req.body);
  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      isError: true,
      message: 'Dados invalidos',
    });
  }
  const students = await studentsServices
    .createStudent(req.params, req.body);

  return res.status(StatusCodes.CREATED).json(students);
};

module.exports = {
  createStudent,
};
