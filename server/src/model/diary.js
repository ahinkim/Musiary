const { Diary: DiarySchema } = require("../schema");
var moment = require("moment");
var index = require("../schema/index.js");
const Sequelize = require("sequelize"); //sequelize 연결
const diary = require("../schema/diary");
const db = require("../schema");
const sequelize = db.sequelize;
/** */
// const seqFn = require("sequelize-fn");
// // const config = {
// //   dataBaseUri: "mysql://user:pass@host/test",
// //   modelsDir: "../model",
// // };
// const sequelize = seqFn; //const sequelize = seqFn(config);
/** */
const createDiary = async (title, content, mood, UserId) => {
  return await DiarySchema.create({ title, content, mood, UserId });
};

const getDiaryById = async (id, userId) => {
  return await DiarySchema.findAll({
    where: {
      id,
      userId,
    },
  });
};

const getDiaries = async (userId) => {
  return await DiarySchema.findAll({
    where: {
      userId,
    },
  });
};

const updateDiary = async (diary, targetId, userId) => {
  const { title, content, mood } = diary;
  await DiarySchema.update(
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
  await DiarySchema.destroy({
    where: {
      id,
      userId,
    },
  });
};

const getDiaryOnToday = async (id) => {
  const [result, metadata] = await sequelize.query(`SELECT * from diaries where DATE(createdAt) = CURDATE() And UserId = ${id}`);
  return result;
  // return await DiarySchema.findAll({
  //   attributes: [[Sequelize.fn("date", Sequelize.col("created_at")), "="]],
  //   where: {
  //      createdAt: { lt: Sequelize.fn("CURDATE") },
  //   },
  // });
};

const Diary = {
  createDiary,
  getDiaries,
  getDiaryById,
  updateDiary,
  deleteDiaryById,
  getDiaryOnToday,
};

module.exports = Diary;
