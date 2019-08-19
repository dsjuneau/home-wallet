const router = require("express").Router();
const auth = require("./auth");
const events = require("./events");
const zillow = require("./zillow");
const home = require("./home");
const vendors = require("./vendors");
const repairs = require("./repairs");
const uploads = require("./uploads");

// routes
router.use("/auth", auth);
router.use("/events", events);
router.use("/repairs", repairs);
router.use("/home", home);

router.use("/zillow", zillow);
router.use("/vendors", vendors);
router.use("uploads", uploads);

module.exports = router;
