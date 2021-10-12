const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

const isValidRa = (ra) => {
  const { RA } = ra;
  const { error } = Joi
    .string()
    .required()
    .max(6)
    .min(1)
    .not()
    .empty()
    .validate(RA);

  if (error) {
    return {
      isError: true,
      message: error.details[0].message,
      code: StatusCodes.UNPROCESSABLE_ENTITY,
    };
  }
  return { isError: false };
};

module.exports = { isValidRa };
