const { StatusCodes } = require('http-status-codes');

const regexValidEmail = (studentData) => {
  const { email } = studentData;
  const REGEX_EMAIL = /.+@.+\..+/g;

  if (!REGEX_EMAIL.test(email)) {
    return {
      isError: true,
      message: 'Invalid student email',
      code: StatusCodes.BAD_REQUEST,
    };
  }
  return { isError: false };
};

module.exports = { regexValidEmail };
