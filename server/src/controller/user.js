const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const model = require("../model/user");
const jsonResponse = require("../util/jsonResponse");

const getUser = async (req, res) => {
  const { id } = req.user;
  try {
    const userInfo = await model.getUserById(id);
    res
      .status(statusCode.OK)
      .json(jsonResponse(responseMessage.OK, { user: userInfo }));
  } catch (e) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(jsonResponse(responseMessage.INTERNAL_SERVER_ERROR));
  }
};

const userController = { getUser };

module.exports = userController;
