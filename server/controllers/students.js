const Student = require("../models").Student;

module.exports = {
  create(req, res) {
    return Student.create(req.body)
      .then(student => res.status(200).json(student))
      .catch(error => res.status(400).json(error));
  },
  list(req, res) {
    return Student.findAll({
      order: [["id", "DESC"]]
    })
      .then(students => res.status(200).json(students))
      .catch(error => res.status(400).json(error));
  },
  update(req, res) {
    return Student.update(req.body, { where: { id: req.params.id } })
      .then(student => res.status(200).json(student))
      .catch(error => res.status(400).json(error));
  },
  destroy(req, res) {
    return Student.findByPk(req.params.studentId).then(student => {
      if (!student) {
        return res.status(400).json({
          message: "Student not found"
        });
      }
      return student
        .destroy()
        .then(() => res.status(200).json(student))
        .catch(error => res.status(400).send(error));
    });
  }
};
