const router = require("express").Router();
const usersController = require("../../controllers/usersController");

require("dotenv").config();

router.route("/register").post(usersController.createUser);
router.route("/login").post(usersController.authUser);
router.route("/login").get(usersController.isAuthUser);
router.route("/reset").post(usersController.reset);

module.exports = router;
