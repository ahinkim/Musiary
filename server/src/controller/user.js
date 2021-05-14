const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const model = require("../model/user");
const jsonResponse = require("../util/jsonResponse");
const validation = require("../util/validation");

const getUsers = (req, res) => {};

const getUserById = async (req, res) => {
  //userId로 가져오게 만듦
  try {
    const User_info = await model.getUserById(req.params.id); //(req.params.id, req.user.id)
    res.status(statusCode.OK).json(User_info);
  } catch (e) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(jsonResponse(responseMessage.INTERNAL_SERVER_ERROR));
  }
};
const editUserInfo = async (req, res) => {
  try {
    const User_info = req.body;
    await model.updateUser(User_info, req.params.id);
    res.status(statusCode.OK).json(jsonResponse(responseMessage.OK));
  } catch (e) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(jsonResponse(responseMessage.INTERNAL_SERVER_ERROR));
  }
};

const userController = { getUserById, getUsers, editUserInfo };

module.exports = userController;
