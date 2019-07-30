const db = require("../models");
const bcrypt = require("bcryptjs");
const uuid = require("uuid/v1");
const nodemailer = require("nodemailer");
const generator = require("generate-password");
require("dotenv").config();

module.exports = {
  createUser: function(req, res) {
    db.User.find({ email: req.body.userToSave.email }).then(dbModel => {
      if (dbModel[0] === undefined) {
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
          //Fix this part to create a new password
          //and encrypt the password before it is stored
          //use a password creation utility
          const newPwd = generator.generate({
            length: 10,
            numbers: true
          });
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(newPwd, salt);

          db.User.updateOne({ email: req.body.email }, { pwd: hash })
          .catch(err => console.log(err));

          function main() {
            let transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: process.env.USER_NAME,
                pass: process.env.USER_PASSWORD
              }
            });

            const mailOptions = {
              from: "hometeam.home.wallet@gmail.com",
              to: "dsjuneau@gmail.com",
              subject: "Password reset",
              text: `Your password has been reset to ${newPwd}`
            };
            transporter.sendMail(mailOptions);
          }
          main();

          console.log("password is reset");
        } else {
          res.json({ msg: "User not authenticated" });
        }
      })
      .catch(err => res.status(422).json(err));
  }
};
