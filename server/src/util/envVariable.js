const getEnvObj = () => {
  require("dotenv").config();

  const {
    NODE_ENV,
    SERVER_PORT,
    DATABASE_NAME,
    DEV_DATABASE_ID,
    DEV_DATABASE_PASSWORD,
    DEV_HOST,
    PRODUCTION_DATABASE_ID,
    PRODUCTION_DATABASE_PASSWORD,
    PRODUCTION_HOST,
    DIALECT,
  } = process.env;

  if (NODE_ENV === "DEVELOPMENT") {
    return {
      SERVER_PORT,
      DATABASE_NAME,
      DATABASE_ID: DEV_DATABASE_ID,
      DATABASE_PASSWORD: DEV_DATABASE_PASSWORD,
      HOST: DEV_HOST,
      DIALECT,
    };
  }

  if (NODE_ENV === "PRODUCTION") {
    return {
      SERVER_PORT,
      DATABASE_NAME,
      DATABASE_ID: PRODUCTION_DATABASE_ID,
      DATABASE_PASSWORD: PRODUCTION_DATABASE_PASSWORD,
      HOST: PRODUCTION_HOST,
      DIALECT,
    };
  }
};

module.exports = getEnvObj();
