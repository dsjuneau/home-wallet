const router = require("express").Router();
const auth = require("./auth");
const zillow = require("./zillow");

// Book routes
router.use("/auth", auth);

router.use("/zillow", zillow);

module.exports = router;
