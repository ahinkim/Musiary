const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const musicModel = require("../model/music");
const UserMusicModel = require("../model/UserMusic");
const apiRequest = require("../util/httpRequest");
const jsonResponse = require("../util/jsonResponse");
const validation = require("../util/validation");

//***** /music
const getMusicsByMood = async (req, res) => {
  try {
    const mood = req.query.mood;
    const musics = await apiRequest.getMusicByMood(mood);
    res
      .status(statusCode.OK)
      .json(jsonResponse(responseMessage.OK, { musics: musics }));
  } catch (e) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(jsonResponse(responseMessage.INTERNAL_SERVER_ERROR));
  }
};

//***** /music/trending
const getTrendingMusicByMood = async (req, res) => {
  try {
    const mood = req.query.mood;
    const musics = await apiRequest.getMusicByMood(mood);
    res
      .status(statusCode.OK)
      .json(jsonResponse(responseMessage.OK, { musics: musics.slice(0, 3) }));
  } catch (e) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(jsonResponse(responseMessage.INTERNAL_SERVER_ERROR));
  }
};

//***** /music/play
const playMusic = async (req, res) => {
  const { id: userId } = req.user;
  const { id, title, src, mood } = req.body;

  if (!validation.isValidMusicPlayBody(id, title, src, mood)) {
    console.log(id, title, src, mood);
    return res
      .status(statusCode.BAD_REQUEST)
      .json(jsonResponse(responseMessage.BODY_VALUE_ERROR));
  }

  try {
    const musics = await musicModel.createMusic(id, title, src, mood);
    await UserMusicModel.createUserMusic(userId, id);
    res.status(statusCode.OK).json(jsonResponse(responseMessage.OK));
  } catch (e) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(jsonResponse(responseMessage.INTERNAL_SERVER_ERROR));
  }
};

const musicController = { getMusicsByMood, getTrendingMusicByMood, playMusic };

module.exports = musicController;
