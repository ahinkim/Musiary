const express = require("express");
const authController = require("../controller/auth");
const musicController = require("../controller/music");
const UserMusic = require("../model/UserMusic");

const router = express.Router();

router.get("/", musicController.getMusicsByMood);
router.put("/:id", authController.validateUser, musicController.playMusic);
router.get("/trending", musicController.getTrendingMusicByMood);
router.get("/test", async (req, res) => {
  const a = await UserMusic.createUserMusic(1, 1);
  res.json({ a });
});

module.exports = router;
