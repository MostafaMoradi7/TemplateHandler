const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

// Define API routes
router.get('/hello', apiController.sayHello);
router.get('/goodbye', apiController.sayGoodbye);

module.exports = router;