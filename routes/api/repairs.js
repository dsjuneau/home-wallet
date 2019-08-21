const router = require("express").Router();
const repairsController = require("../../controllers/repairsController");

// Matches with "/api/repairs"
router
  .route("/")
  .post(repairsController.create)
  .get(repairsController.findAll);

router.route("/user/:id").get(repairsController.findByUserId);

// Matches with "/api/repairs/:id"
router
  .route("/:id")
  .get(repairsController.findById)
  .put(repairsController.update)
  .delete(repairsController.remove);

module.exports = router;
