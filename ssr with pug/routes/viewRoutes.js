const express = require("express");
const router = express.Router();

const authController = require("./../controllers/authController");
const viewsController = require("./../controllers/viewsController");

// router.get("/", (req, res) => {
//   res.status(200).render("base", {
//     tour: "The Forest hiker",
//     user: "Ryuga",
//   });
//   // will look in folder we specified above
// });

router.use(authController.isLoggedIn);
router.get("/", viewsController.getOverview);

router.get("/tour/:slug", viewsController.getTour);

router.get("/login", viewsController.getLoginForm);
module.exports = router;
