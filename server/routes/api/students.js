var express = require("express");
var router = express.Router();

// Load Students model
const Students = require("../../models/Student");

// @name    getStudents endpoint
// @route   GET api/students
// @desc    Get all Students
// @access  Public
router.get("/", (req, res, next) => {
  res.json({
    message: "The route students.js is working properly"
  });
}); // End getStudents endpoint

module.exports = router;
