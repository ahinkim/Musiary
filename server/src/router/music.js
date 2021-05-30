const express = require("express");
const authController = require("../controller/auth");
const musicController = require("../controller/music");
const UserMusic = require("../model/UserMusic");

const router = express.Router();

router.get("/", authController.validateUser, musicController.getMusicsByMood);
//router.put("/:id", authController.validateUser, musicController.playMusic);
router.get("/trending", authController.validateUser, musicController.getTrendingMusicByMood);
router.post("/play", authController.validateUser, musicController.playMusic); //*****/

module.exports = router;
