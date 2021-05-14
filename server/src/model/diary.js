const { Diary: DiaryScheme } = require("../schema");

const createDiary = async (title, content, mood, UserId) => {
  return await DiaryScheme.create({ title, content, mood, UserId });
};

const getDiaryById = async (id, userId) => {
  return await DiaryScheme.findAll({
    where: {
      id,
      userId,
    },
  });
};

const getDiaries = async (userId) => {
  return await DiaryScheme.findAll({
    where: {
      userId,
    },
  });
};

const updateDiary = async (diary, targetId, userId) => {
  const { title, content, mood } = diary;
  await DiaryScheme.update(
    { title, content, mood },
    {
      where: {
        id: targetId,
        userId,
      },
    }
  );

  const newDiary = await getDiaryById(targetId, userId);
  return newDiary[0].dataValues;
};

const deleteDiaryById = async (id, userId) => {
  await DiaryScheme.destroy({
    where: {
      id,
      userId,
    },
  });
};

const Diary = {
  createDiary,
  getDiaries,
  getDiaryById,
  updateDiary,
  deleteDiaryById,
};

module.exports = Diary;
