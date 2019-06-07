var express = require("express");
var router = express.Router();

// Load Campuses model
const Campuses = require("../../models/Campus");

// @name    getCampuses endpoint
// @route   GET api/campuses
// @desc    Get all campuses
// @access  Public
router.get("/", (req, res, next) => {
  res.json({ message: "The route campuses.js is working properly" });
}); // End getCampuses endpoint

module.exports = router;
