const Joi = require('joi');

const isValidRa = (ra) => {
  const { RA } = ra;
  const { error } = Joi
    .string()
    .required()
    .max(6)
    .not()
    .empty()
    .validate(RA);

  if (error) return { isError: true, message: error.details[0].message };
  return { isError: false };
};

module.exports = { isValidRa };
