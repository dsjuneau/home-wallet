const router = require("express").Router();
const repairsController = require("../../controllers/repairsController");

// Matches with "/api/home"
router
  .route("/")
  .get(repairsController.findAll)
  .post(repairsController.create);

// Matches with "/api/repairs/:id"
router
  .route("/:id")
  .get(repairsController.findById)
  .put(repairsController.update)
  .delete(repairsController.remove);

module.exports = router;
