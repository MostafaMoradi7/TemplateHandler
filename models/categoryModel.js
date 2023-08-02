const { Sequelize, DataTypes } = require('sequelize');
const database = require('../conf/database');

const Category = database.define('category', {
  name: {
    type: DataTypes.STRING,
    unique: true,
  },
  parentId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'categories', 
      key: 'id', 
    },
    onDelete: 'SET NULL', 
    onUpdate: 'CASCADE', 
  },
});

Category.belongsTo(Category, {
  as: 'parentCategory',
  foreignKey: 'parentId',
});

Category.hasMany(Category, {
  as: 'subCategories',
  foreignKey: 'parentId',
});

// Synchronize the model with the database (create the table if it doesn't exist)
(async () => {
  await Category.sync();
  console.log('Category table created successfully.');
})();

module.exports = Category;
