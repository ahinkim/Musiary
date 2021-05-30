const { User: UserSchema, Music: MusicSchema } = require("../schema");

const createMusic = async (id, title, src, mood, coverImg) => {
  return await MusicSchema.findOrCreate({
    where: { id },
    defaults: { id, title, src, mood, coverImg },
  });
};

const getMusicById = async (id) => {
  return await MusicSchema.findAll({
    where: {
      id,
    },
  });
};

const getMusicHistory = async (id) => {
  const [user] = await UserSchema.findAll({
    where: { id }, //userId
  });
  const [music] = await MusicSchema.findAll();
  return await user.getMusic({
    attributes: ["id", "title", "src", "mood", "coverImg"],
  });
};

const getMusics = async () => {};
const updateMusic = async (diary, targetId) => {};
const deleteMusicById = async (id) => {};

const Music = {
  createMusic,
  getMusics,
  getMusicById,
  updateMusic,
  deleteMusicById,
  getMusicHistory,
};

module.exports = Music;
