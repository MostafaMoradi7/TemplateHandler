const express = require('express');
const categoryRouter = express.Router();

const categoryController = require('../controllers/categoryController');


categoryRouter.get('/showall', categoryController.showAllCategorys)
categoryRouter.get('/showroots', categoryController.getCategoriesWithChildren)
categoryRouter.put('/edit/:name', categoryController.editCategory)
categoryRouter.post('/create', categoryController.createCategory)

module.exports = categoryRouter;