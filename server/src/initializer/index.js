const initExpress = require("./express.js");
const initMySQL = require("./mysql.js");

const initializer = async (app) => {
  initExpress(app);
  await initMySQL();
};

module.exports = initializer;
