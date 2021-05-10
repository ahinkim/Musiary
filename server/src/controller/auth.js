const kakaoOAuthConfig = require("../config/kakao-oAuth");
const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const authService = require("../service/auth");
const userService = require("../service/user");
const jsonResponse = require("../util/jsonResponse");

const validateUser = async (req, res, next) => {
  const Authorization = req.headers.authorization;

  if (!Authorization) {
    return res.status(statusCode.UNAUTHORIZED).json(jsonResponse(responseMessage.X_UNAUTHORIZED("user")));
  }

  try {
    const { userId } = authService.verifyToken(Authorization);
    const user = await userService.getDecodedUser(userId);

    if (!user) {
      return res.status(statusCode.BAD_REQUEST).json(jsonResponse(responseMessage.NO_X("user")));
    }

    req.user = user;
    next();
  } catch (e) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).json(jsonResponse(responseMessage.INTERNAL_SERVER_ERROR));
  }
};

const redirectToKakaoOAuth = async (req, res) => {
  const { clientId, redirectURL } = kakaoOAuthConfig;

  res.redirect(`https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectURL}&response_type=code`);
};

const signInByKakao = async (req, res) => {
  const { code } = req.query;

  const accessToken = await authService.getAccessCode(code);
  const userInfo = await authService.getKakaoUserInfo(accessToken);
  const user = await userService.getOrCreateUser(userInfo);
  const jwtToken = authService.generateToken(user.id, user.name);

  res.status(statusCode.OK).json(jsonResponse(responseMessage.SIGN_IN_SUCCESS, { token: jwtToken }));
};

const authController = { validateUser, signInByKakao, redirectToKakaoOAuth };

module.exports = authController;
