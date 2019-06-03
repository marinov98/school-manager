var express = require("express");
var router = express.Router();

/* GET campuses listing. */
router.get("/", function(req, res, next) {
  res.send("The route campuses.js is working properly");
});

module.exports = router;
