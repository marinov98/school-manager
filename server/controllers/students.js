const Student = require("../models").Student;

module.exports = {
  create(req, res) {
    let newStudent = req.body;
    newStudent["campusId"] = req.body.campusId;
    return Student.create(newStudent)
      .then(student => res.status(201).json(student))
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
    return Student.update(req.body, { where: { id: req.body.id } })
      .then(student => res.status(200).json(student))
      .catch(error => res.status(400).json(error));
  }
};
