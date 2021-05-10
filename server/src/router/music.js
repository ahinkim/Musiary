const express = require("express");
const authController = require("../controller/auth");
const musicController = require("../controller/music");

const router = express.Router();

router.get("/", musicController.getMusicsByMood);
router.put("/:id", authController.validateUser, musicController.playMusic);
router.get("/trending", musicController.getTrendingMusicByMood);

module.exports = router;
