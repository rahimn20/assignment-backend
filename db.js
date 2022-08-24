const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const Student = require("./students.js");
const app = express();

const { PORT, MONGO_URI } = process.env;

//Database
const database = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(MONGO_URI, connectionParams);
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err);
    console.log("Database connection failed");
  }
});

database();

app.listen(PORT, () => {
  console.log(`Port listening to: ${PORT}`);
});

Student.find

// Student.find({}, function(err, students) {
//   assert.equal(err, null);
//   res.json(students);
// });
