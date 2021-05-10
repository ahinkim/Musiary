const express = require("express");
const authController = require("../controller/auth");
const historyController = require("../controller/history");

const router = express.Router();

router.get("/music", authController.validateUser, historyController.getMusicHistory);
router.get("/diary", authController.validateUser, historyController.getDiaryHistory);

module.exports = router;
