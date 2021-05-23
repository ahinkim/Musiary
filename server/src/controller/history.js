const MusicModel = require("../model/music");

const getMusicHistory = async (req, res) => {
  const musics = await MusicModel.getMusicHistory(req.user.id);
  res.json({ musics: musics });
};

const getDiaryHistory = (req, res) => {};

const historyController = { getMusicHistory, getDiaryHistory };

module.exports = historyController;
