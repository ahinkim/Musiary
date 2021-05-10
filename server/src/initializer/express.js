const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("../router");

const initExpress = (app) => {
  dotenv.config();
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/api", router);
};

module.exports = initExpress;
