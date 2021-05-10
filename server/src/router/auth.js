const express = require("express");
const authController = require("../controller/auth");

const router = express.Router();

router.get("/kakao", authController.redirectToKakaoOAuth);
router.get("/callback/kakao", authController.signInByKakao);

module.exports = router;
