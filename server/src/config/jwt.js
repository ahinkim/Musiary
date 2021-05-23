require("dotenv").config();

const jwtConfig = {
  tokenSecret: process.env.JWT_SECRET || "token-secret",
  tokenExpiresIn: 8640000000000000,
};

module.exports = jwtConfig;
