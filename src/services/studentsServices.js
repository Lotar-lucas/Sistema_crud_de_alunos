const studantsModels = require('../models/student');

const { regexValidEmail } = require('../validations/regexValidEmail');
const { isValidStudentData } = require('../validations/isValidStudentData');
const { isValidRa } = require('../validations/isValidRa');

const createStudent = async (ra, studentData) => {
  // validations
  if (isValidStudentData(studentData).isError) return isValidStudentData(studentData);
  if (isValidRa(ra).isError) return isValidRa(ra);
  if (regexValidEmail(studentData).isError) return regexValidEmail(studentData);

  const { username, email, cpf } = studentData;
  const { RA } = ra;

  await studantsModels.create(RA, username, email, cpf);
  return { isError: false, message: 'Aluno(a) criado com sucesso' };
};

const getAll = async () => {
  const students = await studantsModels.getAll();
  return { studentsData: [...students] };
};

const editStudent = async (ra, studentData) => {
  // validations
  if (isValidStudentData(studentData).isError) return isValidStudentData(studentData);
  if (isValidRa(ra).isError) return isValidRa(ra);
  if (regexValidEmail(studentData).isError) return regexValidEmail(studentData);

  const { RA } = ra;
  const { username, email, cpf } = studentData;
  await studantsModels.edit(RA, username, email, cpf);

  return { isError: false, message: 'Estudante editado com sucesso' };
};

const excludeStudent = async (ra) => {
  // validations
  const numberOfLinesAffectedInCaseOfError = 0;
  if (isValidRa(ra).isError) return isValidRa(ra);
  const { RA } = ra;

  const [result] = await studantsModels.exclude(RA);

  // student case does not exist
  if (result.affectedRows === numberOfLinesAffectedInCaseOfError) return { isError: true, message: 'Aluno(a) não existe' };

  return { isError: false, message: 'Aluno(a) excluido com sucesso' };
};

module.exports = {
  createStudent, getAll, editStudent, excludeStudent,
};
