const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Import models
const backupAndRestoreModel = require('./models/backupAndRestoreModel');
const aboutPhoneModel = require('./models/aboutPhoneModel');

// Import controllers
const backupAndRestoreController = require('./controllers/backupAndRestoreController');
const aboutPhoneController = require('./controllers/aboutPhoneController');

// Import routes
const backupRestoreRoutes = require('./routes/backupRestoreRoutes');
const aboutPhoneRoutes = require('./routes/aboutPhoneRoutes');

// Connect to MongoDB
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected successfully");
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log("Running successfully at", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Use routes and controllers
app.use(backupRestoreRoutes);
app.use(aboutPhoneRoutes);

 
