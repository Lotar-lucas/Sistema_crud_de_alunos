const connectionFactory = require('./connectionFactory');
const schema = require('./schema');

const create = async (RA, username, email, cpf) => {
  const connection = schema.connectionMySQL;
  connectionFactory(connection).execute(
    `INSERT INTO ${connection.database}.students(RA, email, password, role) VALUES (?,?,?,?)`,
    [RA, username, email, cpf],
  );
};

const getAll = async () => {
  const connection = schema.connectionMySQL;
  connectionFactory(connection).execute(`SELECT * FROM ${connection.database}.students`);
};

module.exports = {
  create,
  getAll,
};
