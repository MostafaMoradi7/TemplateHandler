const express = require('express');
const app = express();
const config = require('./conf/conf');

const apiRoutes = require('./routes/api');


app.use('/api', apiRoutes);



// Start the server
app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});