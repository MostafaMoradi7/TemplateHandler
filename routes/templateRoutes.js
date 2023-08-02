const express = require('express');
const templateRouter = express.Router();

const templateController = require('../controllers/templateController');


templateRouter.get('/categories/:categoryName', templateController.getTemplatesByCategory)
templateRouter.get('/showall', templateController.showAllTemplates)
templateRouter.post('/create', templateController.createTemplate)
templateRouter.put('/:id', templateController.editTemplate)
templateRouter.delete('/:id', templateController.deleteTemplate)

module.exports = templateRouter;