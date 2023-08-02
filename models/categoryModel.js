const { Sequelize, DataTypes } = require('sequelize');
const database = require('../conf/database');


const Category = database.define('category', {
  name: {
    type: DataTypes.STRING,
    unique: true
    },
});

Category.belongsTo(Category, {
    as: 'parentCategory', 
    foreignKey: 'name',
  });
  
Category.hasMany(Category, {
    as: 'subCategories', 
    foreignKey: 'name',
});

// Synchronize the model with the database (create the table if it doesn't exist)
(async () => {
  await Category.sync();
  console.log('Category table created successfully.');
})();


module.exports = Category