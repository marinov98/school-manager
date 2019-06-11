const todosController = require("../controllers").todos;
const studentsController = require("../controllers").students;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Todos API!"
    })
  );

  app.post("/api/todos", todosController.create);
  app.get("/api/todos", todosController.list);
  app.post("/api/students", studentsController.create);
  app.get("/api/students", studentsController.list);
};
