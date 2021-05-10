const { Diary: DiaryScheme } = require("../schema");

const createDiary = async (title, content, mood) => {
  await DiaryScheme.create({ title, content, mood });
};

const getDiaryById = async (id) => {
  return await DiaryScheme.findAll({
    where: {
      id,
    },
  });
};

const getDiaries = async () => {
  return await DiaryScheme.findAll();
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
  getDiaries,
  getDiaryById,
  updateDiary,
  deleteDiaryById,
};

module.exports = Diary;
