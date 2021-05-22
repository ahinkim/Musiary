const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const router = require("../router");

const initExpress = (app) => {
  dotenv.config();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
  );
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use("/api", router);
};

module.exports = initExpress;
