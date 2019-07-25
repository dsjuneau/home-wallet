const router = require("express").Router();

// the controller is for accessing the database
// const booksController = require("../../controllers/booksController");
require("dotenv").config();

// Matches with "/api/auth"
router
  .route("/")
  .get((req, res) => {
    res.json({ isAuth: true, userName: "Scott" });
  })
  .post((req, res) => {
    res.json({ isAuth: true, userName: "Scott" });
  });

module.exports = router;
