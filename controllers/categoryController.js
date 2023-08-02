const Category = require('../models/categoryModel')

exports.createCategory = async (req, res) => {
  try {
    const { name, parentName } = req.body;
    if (!parentName){
      const newCategory = await Category.create({ name });
      return res.status(201).json(newCategory);
    }
    const parentCategory = await Category.findOne({
      where: {
        name: parentName
      }
    });
    if (!parentCategory) {
      return res.status(400).json({ error: "No parent category found with the provided parentName." });
    }
    parentId = parentCategory.id
    const newCategory = await Category.create({ name, parentId });

    res.status(201).json(newCategory);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Error creating category.' });
  }
};


exports.showAllCategorys = async (req, res) => {
    try {
      const categories = await Category.findAll()
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Error creating Template.' });
    }
};