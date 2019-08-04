const router = require("express").Router();
const bidsController = require("../../controllers/bidsController");



// Matches with "/api/events"
router.route("/")
  .get(bidsController.findAll)
  .post(bidsController.create);

// Matches with "/api/events/:id"
 router
  .route("/:id")
  .get(bidsController.findById)
  .put(bidsController.update)
  .delete(bidsController.remove);

module.exports = router;  // Needed?