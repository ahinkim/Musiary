const dotenv = require("dotenv");
dotenv.config();

const kakaoOAuthConfig = {
  clientId: process.env.KAKAO_CLIENT_ID,
  redirectURL: process.env.KAKAO_REDIRECT,
};

module.exports = kakaoOAuthConfig;
