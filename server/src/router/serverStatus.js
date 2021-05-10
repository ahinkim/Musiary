const express = require("express");
const authController = require("../controller/auth");
const router = express.Router();

router.get("/", (req, res) => res.json({ status: "OK" }));
router.get("/token", authController.validateUser, (req, res) => {
  res.json({ user: req.user });
});
module.exports = router;
