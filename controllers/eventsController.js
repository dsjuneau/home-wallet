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
  //    console.log("req in findByUserID: " + req);
      db.Event
        .find({ userId: req.params.id })
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
  //    console.log("create in eventsController", req.body);
      db.Event.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
  //    console.log("update in eventsController req.params.id: " + req.params.id); // working
      db.Event
        .findOneAndUpdate({ repairId: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
  //    console.log("from eventscontroller: " + req.params.id);
      db.Event
        .findOneAndDelete({ repairId: req.params.id })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }


};
