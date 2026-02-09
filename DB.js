const mongoose = require("mongoose");
require('dotenv').config();

const mongoURL = process.env.DB_URL;



// connect to MongoDB
mongoose.connect(mongoURL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error", err));

const db = mongoose.connection;

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

module.exports = db;
