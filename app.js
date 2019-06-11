const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger("dev"));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Load static files
app.use(express.static(path.join(__dirname, "client/public")));

// Require our routes into the application.
require("./server/routes")(app);

// Load index.html
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + client + public + "/index.html"));
});

// // Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get("*", (req, res) =>
//   res.status(200).send({
//     message: "Not a valid route!! :)"
//   })
// );

module.exports = app;
