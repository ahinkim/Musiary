const express = require("express");
const userRouter = require("./user");
const musicRouter = require("./music");
const diaryRouter = require("./diary");
const historyRouter = require("./history");
const authRouter = require("./auth");
const statusRouter = require("./serverStatus");

const router = express.Router();

router.use("/user", userRouter);
router.use("/music", musicRouter);
router.use("/diary", diaryRouter);
router.use("/history", historyRouter);
router.use("/auth", authRouter);
router.use("/status", statusRouter);

module.exports = router;
