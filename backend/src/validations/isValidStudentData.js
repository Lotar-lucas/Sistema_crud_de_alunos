const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

const isValidStudentData = (studentData) => {
  const { error } = Joi.object(
    {
      username: Joi.string().required().max(50).min(3)
        .not()
        .empty(),
      email: Joi.string().required().max(50)
        .not()
        .empty(),
      cpf: Joi.string().required().max(11).min(11)
        .not()
        .empty(),
    },
  ).validate(studentData);

  if (error) {
    return {
      isError: true,
      message: error.details[0].message,
      code: StatusCodes.UNPROCESSABLE_ENTITY,
    };
  }
  return { isError: false };
};

module.exports = { isValidStudentData };
