const router = require("express").Router();
const authController = require("../controllers/authController");

// Register User Route
router.post("/signup", authController.signup);

// Login User Route
router.post("/login", authController.login);

module.exports = router;
