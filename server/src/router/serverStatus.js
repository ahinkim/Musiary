const express = require("express");
const responseMessage = require("../constants/responseMessage");
const authController = require("../controller/auth");
const apiRequest = require("../util/httpRequest");
const jsonResponse = require("../util/jsonResponse");
const router = express.Router();

router.get("/", (req, res) => res.json({ status: "OK" }));
router.get("/token", authController.validateUser, (req, res) => {
  res.json({ user: req.user });
});
router.get("/musictest", async (req, res) => {
  const { mood } = req.query;
  const musics = await apiRequest.getMusicByMood(mood);
  res.json(jsonResponse(responseMessage.OK, { musics: musics }));
});
module.exports = router;
