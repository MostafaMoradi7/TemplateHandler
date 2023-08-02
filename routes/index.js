const express = require('express');
const router = express.Router();

const apiRoutes = require('./api');
const categoryRoutes = require('./categoryRoutes');


router.use('/api', apiRoutes);
router.use('/category', categoryRoutes);



module.exports = router;