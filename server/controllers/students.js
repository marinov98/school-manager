const Student = require("../models").Student;

module.exports = {
  create(req, res) {
    return Student.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
      .then(student => res.status(201).send(student))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Student.findAll()
      .then(students => res.status(200).send(students))
      .catch(error => res.status(400).send(error));
  }
};
