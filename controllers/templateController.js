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
      res.status(500).json({ error: 'Error Finding Templates.' });
    }
};


exports.editTemplate = async (req, res) => {
  try {
    const templateId = req.params.id;
    const { title, description, categoryName } = req.body;

    // Find the template by ID
    const template = await Template.findByPk(templateId);

    if (!template) {
      return res.status(404).json({ error: "Template not found." });
    }

    // Find or create the category by name
    let category;
    if (categoryName) {
      category = await Category.findOne({
        where: {
          name: categoryName
        }
      });

      if (!category) {
        // Create the category if it doesn't exist
        try{
          category = await Category.create({ name: categoryName });
        }catch(error){
          return res.status(500).json({ error: 'Error editing template. Can not create Category in which did not exist!' });
        }
      }
    }

    // Update the template's properties based on provided values
    const updatedFields = {};
    if (title) {
      updatedFields.title = title;
    }
    if (description) {
      updatedFields.description = description;
    }
    await template.update(updatedFields);

    // Associate the template with the category if category is provided
    if (category) {
      await template.setCategory(category);
    }

    res.status(200).json(template);
  } catch (error) {
    console.error('Error editing template:', error);
    res.status(500).json({ error: 'Error editing template.' });
  }
};


exports.getTemplatesByCategory = async (req, res) => {
  try {
    const categoryName = req.params.categoryName;

    // Find the category by name
    const category = await Category.findOne({
      where: {
        name: categoryName
      }
    });

    if (!category) {
      return res.status(404).json({ error: "Category not found." });
    }

    // Find all templates associated with the category
    const templates = await Template.findAll({
      include: {
        model: Category,
        where: { name: categoryName },
      },
    });
    res.status(200).json(templates);
  } catch (error) {
    console.error('Error getting templates by category:', error);
    res.status(500).json({ error: 'Error getting templates by category.' });
  }
};


exports.deleteTemplate = async (req, res) => {
  try {
    const templateId = req.params.id;

    // Find the template by ID
    const template = await Template.findByPk(templateId);

    if (!template) {
      return res.status(404).json({ error: "Template not found." });
    }

    // Delete the template
    await template.destroy();

    res.status(200).json({ message: "Template deleted successfully." });
  } catch (error) {
    console.error('Error deleting template:', error);
    res.status(500).json({ error: 'Error deleting template.' });
  }
};
