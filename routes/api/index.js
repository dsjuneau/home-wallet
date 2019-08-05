const router = require("express").Router();
const auth = require("./auth");
const events = require("./events");
const zillow = require("./zillow");
const repairs = require("./repairs");

// routes
router.use("/auth", auth);
router.use("/events", events);
router.use("/repairs", repairs);

router.use("/zillow", zillow);

module.exports = router;
