const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.Event
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByUserId: function(req, res) {
      console.log("req in findByUserID: " + JSON.stringify(req));
      db.Event
        .find({ userId: req.params.userId })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
    findById: function(req, res) {
      db.Event
        .findById(req.params.id)  // only works for mongoose assigned _id.
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      console.log("create in eventsController", req.body);
      db.Event.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Event
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
  //    console.log("from eventscontroller: " + req.params.id);
      db.Event
        .findOneAndDelete({ _id: req.params.id })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }


};
