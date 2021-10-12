const { StatusCodes } = require('http-status-codes');
const studantsModels = require('../models/student');

const { regexValidEmail } = require('../validations/regexValidEmail');
const { isValidStudentData } = require('../validations/isValidStudentData');
const { isValidRa } = require('../validations/isValidRa');
const { transformToLowerCase } = require('../validations/transformToLowerCase');

const getAll = async () => {
  const students = await studantsModels.getAll();
  return { studentsData: [...students] };
};

const createStudent = async (ra, studentData) => {
  if (isValidStudentData(studentData).isError) return isValidStudentData(studentData);
  if (isValidRa(ra).isError) return isValidRa(ra);
  if (regexValidEmail(studentData).isError) return regexValidEmail(studentData);

  const { username, email, cpf } = await transformToLowerCase(studentData);
  const { RA } = ra;

  await studantsModels.create(RA, username, email, cpf);
  return { isError: false, message: 'Student created successfully' };
};

const editStudent = async (ra, studentData) => {
  if (isValidStudentData(studentData).isError) return isValidStudentData(studentData);
  if (isValidRa(ra).isError) return isValidRa(ra);
  if (regexValidEmail(studentData).isError) return regexValidEmail(studentData);

  const { studentsData } = await getAll();
  const studentAlreadyExists = studentsData.some((student) => student.RA === Number(ra.RA));
  if (!studentAlreadyExists) return { isError: true, message: 'Student does not exist in database', code: StatusCodes.CONFLICT };

  const { RA } = ra;
  const { username, email, cpf } = await transformToLowerCase(studentData);
  await studantsModels.edit(RA, username, email, cpf);
  return { isError: false, message: 'Student edited successfully' };
};

const excludeStudent = async (ra) => {
  const numberOfLinesAffectedInCaseOfError = 0;
  if (isValidRa(ra).isError) return isValidRa(ra);

  const { RA } = ra;
  const [result] = await studantsModels.exclude(RA);

  // if the student doesn't exist
  if (result.affectedRows === numberOfLinesAffectedInCaseOfError) return { isError: true, message: 'Student does not exist' };
  return { isError: false, message: 'Student successfully deleted' };
};

module.exports = {
  createStudent, getAll, editStudent, excludeStudent,
};
