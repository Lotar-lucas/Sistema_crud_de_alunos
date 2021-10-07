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

module.exports = { createStudent };
