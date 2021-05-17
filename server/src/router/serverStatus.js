const express = require("express");
const authController = require("../controller/auth");
const apiRequest = require("../util/httpRequest");
const router = express.Router();

router.get("/", (req, res) => res.json({ status: "OK" }));
router.get("/token", authController.validateUser, (req, res) => {
  res.json({ user: req.user });
});
router.get("/musictest", async (req, res) => {
  const { mood } = req.query;
  const musics = await apiRequest.getMusicByMood(mood);
  console.log(musics);
  res.json(musics);
});
module.exports = router;
