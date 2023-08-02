const express = require('express');
const categoryRouter = express.Router();

const categoryController = require('../controllers/categoryController');


categoryRouter.post('/create', categoryController.createCategory)
categoryRouter.get('/showall', categoryController.showAllCategorys)


module.exports = categoryRouter;