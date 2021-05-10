const envObj = require("../util/envVariable");
const Sequelize = require("sequelize");

let db = {};

const initSequelize = () => {
  const { DATABASE_NAME, DATABASE_ID, DATABASE_PASSWORD, HOST, DIALECT } = envObj;
  const sequelize = new Sequelize(DATABASE_NAME, DATABASE_ID, DATABASE_PASSWORD, {
    host: HOST,
    dialect: DIALECT,
  });

  db = {
    User: require("./user")(sequelize, Sequelize),
    Music: require("./music")(sequelize, Sequelize),
    Diary: require("./diary")(sequelize, Sequelize),
  };

  Object.keys(db).forEach((model) => {
    if (db[model].associate) {
      db[model].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
};

initSequelize();
module.exports = db;
