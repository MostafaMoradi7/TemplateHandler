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

app.use(express.json())


const apiRoutes = require('./routes/api');
const categoryRoutes = require('./routes/categoryRoutes');
const templateRoutes = require('./routes/templateRoutes');


app.use('/api', apiRoutes);
app.use('/category', categoryRoutes);
app.use('/template', templateRoutes);




// Start the server
app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});