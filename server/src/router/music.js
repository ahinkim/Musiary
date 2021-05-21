const express = require("express");
const authController = require("../controller/auth");
const musicController = require("../controller/music");

const router = express.Router();

router.get("/", authController.validateUser, musicController.getMusicsByMood);
//router.put("/:id", authController.validateUser, musicController.playMusic);
router.get(
  "/trending",
  authController.validateUser,
  musicController.getTrendingMusicByMood
);
router.get("/play", authController.validateUser, musicController.playMusic); //*****/

module.exports = router;
