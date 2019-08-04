const router = require("express").Router();
const auth = require("./auth");
const events = require("./events");

// Book routes
router.use("/auth", auth);
router.use("/events", events);
// router.use("/repairs", repairs);

module.exports = router;
