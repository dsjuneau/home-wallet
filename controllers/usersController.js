const db = require("../models");

// Defining methods for the booksController
module.exports = {
  createUser: function(req, res) {
    console.log(req.body);
    db.User.find({ email: req.body.userToSave.email }).then(dbModel => {
      if (dbModel[0] === undefined) {
        db.User.create(req.body.userToSave)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      } else {
        res.json({ userExists: true });
      }
    });
  },

  authUser: function(req, res) {
    console.log(req.body);
    db.User.findOne({ email: req.body.email })
      .then(dbModel => {
        console.log(dbModel);
        if (dbModel !== null) {
          if (req.body.password === dbModel.pwd) {
            res.json(dbModel);
          } else {
            res.json({ msg: "email and password do not match" });
          }
        } else {
          res.json({ msg: "email not registered" });
        }
      })
      .catch(err => res.status(422).json(err));
  }
};
