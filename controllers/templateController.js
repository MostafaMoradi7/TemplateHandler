const Template = require('../models/templateModel')
const Category = require('../models/categoryModel')

exports.createTemplate = async (req, res) => {
  try {
    const { title, description, categoryName } = req.body;

    // Find the category by name
    const category = await Category.findOne({
      where: {
        name: categoryName
      }
    });

    if (!category) {
      return res.status(400).json({ error: "Category not found with the provided name." });
    }

    // Create the new template and associate it with the category
    const newTemplate = await Template.create({ title, description });
    await newTemplate.setCategory(category);

    res.status(201).json(newTemplate);
  } catch (error) {
    console.error('Error creating template:', error);
    res.status(500).json({ error: 'Error creating template.' });
  }
};
exports.showAllTemplates = async (req, res) => {
    try {
      const templates = await Template.findAll()
      res.status(200).json(templates);
    } catch (error) {
      res.status(500).json({ error: 'Error creating Template.' });
    }
};

// exports.editTemplate = async (req, res) => {
//     try {
      
//     } catch (error) {
//       res.status(500).json({ error: 'Error creating Template.' });
//     }
// };

// exports.deleteTemplate = async (req, res) => {
//     try {
      
//     } catch (error) {
//       res.status(500).json({ error: 'Error creating Template.' });
//     }
// };


// exports.listCategoryTemplates = async (req, res) => {
//     try {
      
//     } catch (error) {
//       res.status(500).json({ error: 'Error creating Template.' });
//     }
// };