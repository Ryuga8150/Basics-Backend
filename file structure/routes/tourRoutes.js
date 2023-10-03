const express = require("express");
const tourController = require("../controllers/tourController");
// here tour Router is not need now so give simple name

const router = express.Router();

router.param("id", (req, res, next, val) => {
  // could be used to check if id is valid or not
  if (!id)
    return res.status(404).json({
      status: "Invalid id",
    });

  // always RETURN if you want to break
  console.log("Tour Route Param hit!!!");
  next();
});

const chainMiddleWare = (req, res, next) => {
  console.log("Chaining MiddleWare");
  next();
};

router.route("/").get(chainMiddleWare, tourController.getAllTours);
router.route("/:id").get(tourController.getTour);

module.exports = router;
