const express = require('express');
const templateRouter = express.Router();

const templateController = require('../controllers/templateController');


templateRouter.post('/create', templateController.createTemplate)
templateRouter.get('/showall', templateController.showAllTemplates)
templateRouter.put('/:id', templateController.editTemplate)

module.exports = templateRouter;