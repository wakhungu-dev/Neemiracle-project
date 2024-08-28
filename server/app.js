const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes/routes');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI;

// Parse JSON bodies for incoming requests
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch(err => console.error('Could not connect to MongoDB', err));

//   routes
app.use('/todos',routes);

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });