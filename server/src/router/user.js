const express = require("express");
const authController = require("../controller/auth");
const userController = require("../controller/user");

const router = express.Router();

router.get("/:id", authController.validateUser, userController.getUserById);
router.put("/:id", authController.validateUser, userController.editUserInfo);

module.exports = router;
