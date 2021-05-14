const express = require("express");
const authController = require("../controller/auth");
const userController = require("../controller/user");

const router = express.Router();

router.get("/", authController.validateUser, userController.getUser);

module.exports = router;
