const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const database = require("./db")
// const {
//     createStudent, 
//     getStudents, 
//     getStudent, 
//     deleteStudent, 
//     updateStudent 
// } = require

let studentSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    place: String
});

const model = mongoose.model('students', studentSchema);

module.exports = model;



// //All Students
// router.get("/", getStudents);

// //Specific Student
// router.get("/:id", getStudent);

// //Create new Student
// router.post("/", createStudent);

// //Delete specific Student
// router.delete("/:id", deleteStudent);

// //Update specific Student
// router.patch("/:id", updateStudent);