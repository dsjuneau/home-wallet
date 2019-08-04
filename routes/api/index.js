const router = require("express").Router();
const auth = require("./auth");
const events = require("./events");
const zillow = require("./zillow");

// Book routes
router.use("/auth", auth);
router.use("/events", events);
// router.use("/repairs", repairs);

router.use("/zillow", zillow);

module.exports = router;
