const router = require("express").Router();
const bidsController = require("../../controllers/bidsController");

// Matches with "/api/bids"
router
  .route("/")
  .get(bidsController.findAll)
  .post(bidsController.create);

// Matches with "/api/bids/:id"
router
  .route("/:id")
  .get(bidsController.findById)
  .put(bidsController.update)
  .delete(bidsController.remove);

module.exports = router; // Needed?
