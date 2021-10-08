const Joi = require('joi');

const isValidRa = (ra) => {
  const { error } = Joi.string().required().max(6).not()
    .empty()
    .validate(ra);

  if (error) return { isError: true, message: error.details[0].message };
  return { isError: false };
};

module.exports = { isValidRa };
