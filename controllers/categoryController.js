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



exports.editCategory = async (req, res) => {
  try {
    const categoryName = req.params.name;
    const { name, parentId } = req.body;

    // Find the category by ID
    const category = await Category.findOne({
      where: {
        name: categoryName
      }
    });

    if (!category) {
      return res.status(404).json({ error: "Category not found." });
    }

    // Update the category's properties based on provided values
    const updatedFields = {};
    if (name) {
      updatedFields.name = name;
    }
    if (parentId !== undefined) {
      updatedFields.parentId = parentId;
    }

    // Perform the category update
    await category.update(updatedFields);

    res.status(200).json(category);
  } catch (error) {
    console.error('Error editing category:', error);
    res.status(500).json({ error: 'Error editing category.' });
  }
};



exports.getCategoriesWithChildren = async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: Category,
          as: 'subCategories',
        },
      ],
    });

    res.status(200).json(categories);
  } catch (error) {
    console.error('Error editing category:', error);
    res.status(500).json({ error: 'Error Collectiong category information.' });
  }
};

