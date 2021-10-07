const studantsModels = require('../models/student');

const createStudent = async (ra, studentData) => {
  // validações com meddlewares
  //
  const { username, email, cpf } = studentData;
  const { RA } = ra;
  await studantsModels.create(RA, username, email, cpf);
  return {
    isError: false,
    message: 'Estudante criado com sucesso',
  };
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

module.exports = { createStudent, getAll, editStudent };
