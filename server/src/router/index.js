const express = require("express");
const userRouter = require("./user");
const musicRouter = require("./music");
const diaryRouter = require("./diary");
const historyRouter = require("./history");
const authRouter = require("./auth");

const router = express.Router();

router.use("/user", userRouter);
router.use("/music", musicRouter);
router.use("/diary", diaryRouter);
router.use("/history", historyRouter);
router.use("/auth", authRouter);

module.exports = router;
