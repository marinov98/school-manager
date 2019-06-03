var express = require("express");
var router = express.Router();

/* GET students listing. */
router.get("/", function(req, res, next) {
  res.send("The route students.js is working properly");
});

module.exports = router;
