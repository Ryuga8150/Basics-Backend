const express = require("express");
const tourController = require("../controllers/tourController");
// here tour Router is not need now so give simple name

const router = express.Router();

router.route("/").get(tourController.getAllTours);
router.route("/:id").get(tourController.getTour);

module.exports = router;
