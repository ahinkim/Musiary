const { Music: MusicScheme } = require("../schema");

const createMusic = async (title, content, mood) => {};
const getMusicById = async (id) => {};
const getMusics = async () => {};
const updateMusic = async (diary, targetId) => {};
const deleteMusicById = async (id) => {};

const Music = {
  createMusic,
  getMusics,
  getMusicById,
  updateMusic,
  deleteMusicById,
};

module.exports = Music;
