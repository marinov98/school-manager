const studentsController = require("../controllers").students;
const campusesController = require("../controllers").campuses;

module.exports = app => {
  app.post("/api/students", studentsController.create);
  app.get("/api/students", studentsController.list);
  app.post("/api/campuses", campusesController.create);
  app.get("/api/campuses", campusesController.list);
  app.get("/api", async (req, res, next) => {
    try {
      res.status(200).send({
        message: "Welcome to the School Manager API!"
      });
    } catch (error) {
      next(error);
    }
  });
};
