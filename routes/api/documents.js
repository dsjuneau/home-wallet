const router = require("express").Router();
// const documentsController = require("../../controllers/documentsController");

// Matches with "/api/documents"
router
  .route("/")
  .post(documentsController.create)
  .get(documentsController.findAll);

router.route("/user/:id").get(documentsController.findByUserId);

// Matches with "/api/documents/:id"

router
  .route("/:id")
  .get(documentsController.findById)
  .put(documentsController.update)
  .delete(documentsController.remove);

module.exports = router;
