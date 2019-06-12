const studentsController = require("../controllers").students;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the School Manager API!"
    })
  );
  app.post("/api/students", studentsController.create);
  app.get("/api/students", studentsController.list);
};
