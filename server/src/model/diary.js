const { Diary: DiaryScheme } = require("../schema");

const createDiary = async (title, content, mood, UserId) => {
  return await DiaryScheme.create({ title, content, mood, UserId });
};

const getDiaryById = async (id) => {
  return await DiaryScheme.findAll({
    where: {
      id,
    },
  });
};

const getDiariesbyUserId = async (UserId) => {
  const diaries = await DiaryScheme.findAll({ where: { UserId } });
  return [...diaries].map((diary) => diary.dataValues);
};

const updateDiary = async (diary, targetId) => {
  const { title, content, mood } = diary;
  await DiaryScheme.update(
    { title, content, mood },
    {
      where: {
        id: targetId,
      },
    }
  );
};
const deleteDiaryById = async (id) => {
  await DiaryScheme.destroy({
    where: {
      id,
    },
  });
};

const Diary = {
  createDiary,
  getDiariesbyUserId,
  getDiaryById,
  updateDiary,
  deleteDiaryById,
};

module.exports = Diary;
