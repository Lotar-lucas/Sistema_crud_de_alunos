const Joi = require('joi');

const joiValidadeData = (ra, studentData) => {
  const { error } = Joi.object(
    {
      username: Joi.string().required().alphanum().max(50)
        .not()
        .empty(),
      email: Joi.string().required().max(50).not()
        .empty(),
      cpf: Joi.string().required().max(11).not()
        .empty(),
    },
  ).validate(studentData);

  const { errorRA } = Joi.string().required().max(6).not()
    .empty()
    .validate(ra);

  if (error || errorRA) return { isError: true, message: error.details[0].message };
  return { isError: false };
};

module.exports = { joiValidadeData };
