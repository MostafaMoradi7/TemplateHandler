const express = require('express');
const app = express();
const config = require('./conf/conf');

const connection = require('./conf/database');

try {
  connection.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}



const apiRoutes = require('./routes/api');


app.use('/api', apiRoutes);



// Start the server
app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});