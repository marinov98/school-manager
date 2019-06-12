const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

// Grab .env file
require("dotenv").config();

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger("dev"));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require("./server/routes")(app);

// Load .env variable 'DATABASE_URL'
app.get("/", (req, res) => {
  res.send(process.env.DATABASE_URL);
});

module.exports = app;
