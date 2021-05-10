const dotenv = require("dotenv");
dotenv.config();

const kakaoOAuthConfig = {
  clientId: process.env.KAKAO_CLIENT_ID,
  redirectURL: process.env.NODE_ENV === "DEVELOPMENT" ? process.env.KAKAO_REDIRECT_DEV : process.env.KAKAO_REDIRECT_PRODUCTION,
};

module.exports = kakaoOAuthConfig;
