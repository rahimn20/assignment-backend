const Student = require('../models/studentModel');

const getStudents = async function (req, res) {
  const students = await Student.find({});

  res.status(200).json(students);
};

const getStudent = async function (req, res) {
  console.log(req.params.id);
  Student.findById(req.params.id)
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  })
 };

const createStudent = async  (req, res) => {
  const {name , place} = req.body
  try{
    const student = await Student.create({name, place,});
    res.status(200).json(student);
  }
  catch(err){
    res.status(400).json({error: err})
  }

 };

const deleteStudent = async (req, res) => {
  Student.findByIdAndRemove(req.params.id)
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  })
  console.log(`Successfully deleted ${req.params.id}`)
 };

const updateStudent = async (req, res) => {
  const updates = req.body

  Student.findByIdAndUpdate(req.params.id, req.body, {new: true} )
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  })
  console.log(`Successfully updated ${req.params.id}`)
 };

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  deleteStudent,
  updateStudent
}