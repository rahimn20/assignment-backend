const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const studentRouter = require('./routes/studentRoutes');

const app = express();
app.use(express.json());

app.use('/api/students', studentRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT} and connected to db .`);
    });
  });


