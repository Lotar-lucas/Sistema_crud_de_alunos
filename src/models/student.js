const connectionFactory = require('./connectionFactory');
const schema = require('./schema');

const create = async (RA, username, email, cpf) => {
  const connection = schema.connectionMySQL;
  return connectionFactory(connection)
    .execute(`INSERT INTO ${connection.database}.students(RA, username, email, CPF) VALUES (?,?,?,?)`,
      [RA, username, email, cpf]);
};

const getAll = async () => {
  const connection = schema.connectionMySQL;
  return connectionFactory(connection)
    .execute(`RA, username, email, CPF FROM ${connection.database}.students`);
};

const exclude = async (RA) => {
  const connection = schema.connectionMySQL;
  return connectionFactory(`DELETE FROM ${connection.database}.students WHERE RA = ${RA}`);
};

module.exports = {
  create,
  getAll,
  exclude,
};
