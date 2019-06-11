const Student = require("../models").Student;

module.exports = {
  create(req, res) {
    return Student.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      imageURL: req.body.imageURL,
      gpa: req.body.gpa,
      campus: req.body.campus
    })
      .then(student => res.status(201).send(student))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Student.findAll()
      .then(students => res.status(200).send(students))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Student.update(req.body, { where: { id: req.body.id } })
      .then(student => res.status(200).send(student))
      .catch(error => res.status(400).send(error));
  }
};
