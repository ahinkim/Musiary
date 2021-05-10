const db = require("../schema");

const initMySQL = async () => {
  try {
    await db.sequelize.sync();
    console.log("DB Init Success!");
  } catch (err) {
    console.error(err);
  }
};

module.exports = initMySQL;
