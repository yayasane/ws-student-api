// app.js
const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');
const sequelize = require('./config/database');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Register student routes
app.use('/students', studentRoutes);

// Sync the Sequelize models with the database
sequelize.sync().then(() => {
    console.log('Database and tables synced');
    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch((error) => {
    console.error('Unable to sync the database:', error);
});
