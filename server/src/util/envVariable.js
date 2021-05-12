const getEnvObj = () => {
  require("dotenv").config();

  const { SERVER_PORT, DATABASE_NAME, DATABASE_ID, DATABASE_PASSWORD, HOST, DIALECT } = process.env;

  return {
    SERVER_PORT,
    DATABASE_NAME,
    DATABASE_ID: DATABASE_ID,
    DATABASE_PASSWORD: DATABASE_PASSWORD,
    HOST: HOST,
    DIALECT,
  };
};

module.exports = getEnvObj();
