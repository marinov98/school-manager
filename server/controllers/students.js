const Student = require("../models").Student;

module.exports = {
  async create(req, res) {
    return Student.create(req.body)
      .then(student => res.status(201).json(student))
      .catch(error => res.status(400).json(error));
  },
  async list(req, res) {
    return Student.findAll({
      order: [["id", "DESC"]]
    })
      .then(students => res.status(200).json(students))
      .catch(error => res.status(400).json(error));
  },
  async update(req, res) {
    return Student.update(req.body, { where: { id: req.params.id } })
      .then(student => res.status(200).json(student))
      .catch(error => res.status(400).json(error));
  },
  async delete(req, res) {
    return Student.delete(req.body, { where: { id: req.params.id } })
      .then(student => res.status(200).json(student))
      .catch(error => res.status(400).json(error));
  }
};
