const router = require("express").Router();
const auth = require("./auth");

// Book routes
router.use("/auth", auth);

module.exports = router;
