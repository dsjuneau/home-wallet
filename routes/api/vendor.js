const router = require("express").Router();
const homeController = require("../../controllers/vendorsController");

// Matches with "/api/home"
router
  .route("/")
  .get(vendorsController.findAll)
  .post(vendorsController.create);

// Matches with "/api/vendors/:id"
router
  .route("/:id")
  .get(vendorsController.findById)
  .put(vendorsController.update)
  .delete(vendorsController.remove);

module.exports = router;
