const router = require("express").Router();
const usersController = require("../../controllers/usersController");

require("dotenv").config();

// Matches with "/api/auth"
// This part of the code emmulates authentication
router
  .route("/")
  .get((req, res) => {
    res.json({ isAuth: false, userName: "Scott" });
  })
  .post((req, res) => {
    res.json({ isAuth: false, userName: "Scott" });
  });

router.route("/login").post(usersController.createUser);

module.exports = router;
