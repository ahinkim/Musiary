const { User: UserSchema, Music: MusicSchema } = require("../schema");

async function createUserMusic(UserId, MusicId) {
  const [user] = await UserSchema.findAll({ where: { id: UserId } });
  const [music] = await MusicSchema.findAll({ where: { id: MusicId } });

  return await user.addMusic(music);
}

const UserMusic = {
  createUserMusic,
};

module.exports = UserMusic;
