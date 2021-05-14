const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const model = require("../model/diary");
const { getMood } = require("../util/httpRequest");
const apiRequest = require("../util/httpRequest");
const jsonResponse = require("../util/jsonResponse");
const validation = require("../util/validation");

const getDiaryById = async (req, res) => {
  try {
    //const diary = await model.getDiaryById(req.params.id, req.user.id);
    const diary = await model.getDiaryById(req.params.id, req.user.id);
    res.status(statusCode.OK).json(jsonResponse(responseMessage.OK, diary));
  } catch (e) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).json(jsonResponse(responseMessage.INTERNAL_SERVER_ERROR));
  }
};

const getDiaries = async (req, res) => {
  try {
    const diary = await model.getDiaries(req.user.id);
    res.status(statusCode.OK).json(diary);
  } catch (e) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).json(jsonResponse(responseMessage.INTERNAL_SERVER_ERROR));
  }
};

const postDiary = async (req, res) => {
  const { id } = req.user;
  const { title, content } = req.body;
  const mood = await apiRequest.getMood(content);

  if (!validation.isValidDiaryPostBody(title, content, mood)) {
    console.log(title, content, mood);
    return res.status(statusCode.BAD_REQUEST).json(jsonResponse(responseMessage.BODY_VALUE_ERROR));
  }

  try {
    const newUser = await model.createDiary(title, content, mood, id);
    res.status(statusCode.OK).json(jsonResponse(responseMessage.OK, newUser.dataValues));
  } catch (e) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).json(jsonResponse(responseMessage.INTERNAL_SERVER_ERROR));
  }
};

const deleteDiary = async (req, res) => {
  try {
    const diary = await model.deleteDiaryById(req.params.id, req.user.id);
    res.status(statusCode.OK).json(jsonResponse(responseMessage.OK, diary));
  } catch (e) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).json(jsonResponse(responseMessage.INTERNAL_SERVER_ERROR));
  }
};
const editDiary = async (req, res) => {
  const { content } = req.body;
  const mood = await getMood(content);
  try {
    const diary = { ...req.body, mood };
    const newDiary = await model.updateDiary(diary, req.params.id, req.user.id);
    res.status(statusCode.OK).json(jsonResponse(responseMessage.OK, newDiary));
  } catch (e) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).json(jsonResponse(responseMessage.INTERNAL_SERVER_ERROR));
  }
};

const diaryController = {
  getDiaryById,
  getDiaries,
  postDiary,
  deleteDiary,
  editDiary,
};

module.exports = diaryController;
