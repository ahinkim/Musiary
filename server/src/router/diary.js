const express = require("express");
const authController = require("../controller/auth");
const diaryController = require("../controller/diary");

const router = express.Router();

router.get("/", authController.validateUser, diaryController.getDiaries);
router.post("/", authController.validateUser, diaryController.postDiary);
router.get("/:id", authController.validateUser, diaryController.getDiaryById);
router.delete("/:id", authController.validateUser, diaryController.deleteDiary);
router.put("/:id", authController.validateUser, diaryController.editDiary);

module.exports = router;
