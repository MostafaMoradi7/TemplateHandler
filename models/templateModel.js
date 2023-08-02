const { Sequelize, DataTypes } = require('sequelize');
const database = require('../conf/database');
const Category = require('./categoryModel');

const Template = database.define('template', {
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Template.belongsTo(Category, { foreignKey: 'name' });

// Synchronize the model with the database (create the table if it doesn't exist)
(async () => {
  await Template.sync();
  console.log('Template table created successfully.');
})();


module.exports = Template