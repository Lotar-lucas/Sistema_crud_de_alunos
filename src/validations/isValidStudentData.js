const Joi = require('joi');

const isValidStudentData = (studentData) => {
  const { error } = Joi.object(
    {
      username: Joi.string().required().max(50)
        .not()
        .empty(),
      email: Joi.string().required().max(50).not()
        .empty(),
      cpf: Joi.string().required().max(11).not()
        .empty(),
    },
  ).validate(studentData);

  if (error) return { isError: true, message: error.details[0].message };
  return { isError: false };
};

module.exports = { isValidStudentData };
