const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/events"
router
  .route("/")
  .post(eventsController.create);


  router
  .route("/user/:id")
  .get(eventsController.findByUserId)

  // Matches with "/api/events/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)  // using repairId
  .delete(eventsController.remove);

module.exports = router; // Needed?
