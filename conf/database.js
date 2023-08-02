const { Sequelize } = require('sequelize');

const connection = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'ABRNOC',
  username: 'postgres',
  password: 'pass123word',
});

module.exports = connection;