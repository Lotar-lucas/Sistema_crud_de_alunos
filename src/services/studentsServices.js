const studantsModels = require('../models/student');
const { regexValidEmail } = require('../validations/regexValidEmail');
const { joiValidadeData } = require('../validations/joiValidateData');

const createStudent = async (ra, studentData) => {
  if (joiValidadeData(ra, studentData).isError) return joiValidadeData(ra, studentData);
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
  const { RA } = ra;
  const { username, email, cpf } = studentData;
  await studantsModels.edit(RA, username, email, cpf);
  return {
    isError: false,
    message: 'Estudante editado com sucesso',
  };
};

const excludeStudent = async (ra) => {
  const numberOfLinesAffectedInCaseOfError = 0;
  const { RA } = ra;
  const [result] = await studantsModels.exclude(RA);
  if (result.affectedRows === numberOfLinesAffectedInCaseOfError) {
    return { isError: true, message: 'Erro ao esxcluir aluno(a)' };
  }
  return { isError: false };
};

module.exports = {
  createStudent, getAll, editStudent, excludeStudent,
};
