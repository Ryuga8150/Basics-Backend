const express = require("express");

const bookingController = require("./../controllers/bookingController");
const authController = require("./../controllers/authController");

// to allow tourId we use mergePArams in router
// since by default they have access to their own route params
const router = express.Router();

router.get(
  "/checkout-session/:tourID",
  authController.protect,
  bookingController.getCheckoutSession
);

module.exports = router;
