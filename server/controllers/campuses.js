const Campus = require("../models").Campus;

module.exports = {
    create(req, res) {
        return Campus.create(req.body)
            .then(campus => res.status(201).json(campus))
            .catch(error => res.status(400).json(error));
    },
    list(req, res) {
        return Campus.findAll({
            order: [["id", "DESC"]]
        })
            .then(campuses => res.status(200).json(campuses))
            .catch(error => res.status(400).json(error));
    },
};
