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
  const [result] = await connectionFactory(connection)
    .execute(`SELECT RA, username, email, CPF FROM ${connection.database}.students`);
  return result;
};

const exclude = async (RA) => {
  const connection = schema.connectionMySQL;
  return connectionFactory(connection)
    .execute(`DELETE FROM ${connection.database}.students WHERE RA = ${RA}`);
};

const edit = async (RA, username, email, cpf) => {
  const connection = schema.connectionMySQL;
  return connectionFactory(connection)
    .execute(`UPDATE students RA=?, username=?, email=?, cpf=? WHERE RA = ${RA}`, [RA, username, email, cpf]);
};

module.exports = {
  create,
  getAll,
  exclude,
  edit,
};
