const db = require("../models");
const bcrypt = require("bcryptjs");
const uuid = require("uuid/v1");

// Defining methods for the booksController
module.exports = {
  createUser: function(req, res) {
    db.User.find({ email: req.body.userToSave.email }).then(dbModel => {
      if (dbModel[0] === undefined) {
        //Add code here to encrypt password
        //Change userToSave.password to the encrypted password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.userToSave.pwd, salt);
        req.body.userToSave.pwd = hash;
        req.body.userToSave.key = uuid();
        db.User.create(req.body.userToSave)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      } else {
        res.json({ userExists: true });
      }
    });
  },

  authUser: function(req, res) {
    db.User.findOne({ email: req.body.email })
      .then(dbModel => {
        if (dbModel !== null) {
          //Turn the password here into an encrypted password
          //Change req.body.password to the encrypted password

          if (bcrypt.compareSync(req.body.password, dbModel.pwd)) {
            res.json(dbModel);
          } else {
            res.json({ msg: "email and password do not match" });
          }
        } else {
          res.json({ msg: "email not registered" });
        }
      })
      .catch(err => res.status(422).json(err));
  },
  isAuthUser: function(req, res) {
    if (req.cookies !== null) {
      db.User.findOne({ key: req.cookies.key })
        .then(dbModel => {
          if (dbModel !== null) {
            //Turn the password here into an encrypted password
            //Change req.body.password to the encrypted password
            res.json(dbModel);
          } else {
            res.json({ msg: "User not authenticated" });
          }
        })
        .catch(err => res.status(422).json(err));
    } else {
      res.json({ msg: "User not authnticated" });
    }
  },
  reset: function(req, res) {
    db.User.findOne({ email: req.body.email })
      .then(dbModel => {
        if (dbModel !== null) {
          //Database update to change password
          //Mailer to send out new password
          console.log("password is reset");
        } else {
          res.json({ msg: "User not authenticated" });
        }
      })
      .catch(err => res.status(422).json(err));
  }
};
