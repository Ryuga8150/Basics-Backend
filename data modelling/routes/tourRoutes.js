const express = require("express");

const tourController = require("../controllers/tourController");
const authController = require("../controllers/authController");
// const reviewController = require("../controllers/reviewController");

const reviewRouter = require("./reviewRoutes");

const router = express.Router();

router
  .route("/top-5-cheap")
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route("/tour-stats").get(tourController.getTourStats);
router.route("/monthly-plan/:year").get(tourController.getMonthlyPlan);

router
  .route("/")
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTour);

router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    tourController.deleteTour
  );

// POST / tour/24das78das/reviews
// GET / tour/24das78das/reviews
// GET / tour/24das78das/reviews/54d5asd5

// router
//   .route("/:tourId/reviews")
//   .post(
//     authController.protect,
//     authController.restrictTo("user"),
//     reviewController.createReview
//   );

// the above is duplciate code similar to one in reviewRoutes
// so solving the problem as follows
router.use("/:tourId/reviews", reviewRouter);

module.exports = router;
