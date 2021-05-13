const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const { createDiary } = require("../model/diary");
const jsonResponse = require("../util/jsonResponse");
const validation = require("../util/validation");

const getDiaryById = (req, res) => {};
const getDiaries = (req, res) => {};

const postDiary = async (req, res) => {
  const { id } = req.user;
  const { title, content, mood } = req.body;

  if (!validation.isValidDiaryPostBody(title, content, mood)) {
    return res.status(statusCode.BAD_REQUEST).json(jsonResponse(responseMessage.BODY_VALUE_ERROR));
  }

  try {
    const newUser = await createDiary(title, content, mood, id);
    res.status(statusCode.OK).json(jsonResponse(responseMessage.OK, newUser.dataValues));
  } catch (e) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).json(jsonResponse(responseMessage.INTERNAL_SERVER_ERROR));
  }
};

const deleteDiary = (req, res) => {};
const editDiary = (req, res) => {};

const diaryController = {
  getDiaryById,
  getDiaries,
  postDiary,
  deleteDiary,
  editDiary,
};

module.exports = diaryController;
