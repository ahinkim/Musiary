const jwt = require("jsonwebtoken");
const axios = require("axios");
const qs = require("querystring");
const kakaoOAuthConfig = require("../config/kakao-oAuth");
const jwtConfig = require("../config/jwt");

const verifyToken = (token) => {
  token = token.replace("Bearer ", "");

  return jwt.verify(token, jwtConfig.tokenSecret);
};

const getAccessCode = async (code) => {
  const response = await axios.post(
    "https://kauth.kakao.com/oauth/token",
    qs.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri: kakaoOAuthConfig.redirectURL,
      client_id: kakaoOAuthConfig.clientId,
    }),
    {
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        charset: "utf-8",
      },
    }
  );

  return response.data.access_token;
};

const getKakaoUserInfo = async (accessToken) => {
  const { data } = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

const generateToken = (userId, name) => {
  const { tokenSecret, tokenExpiresIn } = jwtConfig;

  return jwt.sign({ userId, name }, tokenSecret, { expiresIn: tokenExpiresIn });
};

const authService = { verifyToken, getAccessCode, getKakaoUserInfo, generateToken };

module.exports = authService;
