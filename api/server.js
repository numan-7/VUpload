const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const connectDb = require('./config/db');

const app = express();

connectDb();

// Connect to Server
const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});