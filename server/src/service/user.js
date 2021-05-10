const User = require("../model/user");

const getDecodedUser = async (id) => {
  const user = await User.getUserById(id);
  return user;
};

const getOrCreateUser = async (userInfo) => {
  let user = await User.getUserByUserId(userInfo.id);
  if (user.length === 0) {
    const newUser = {
      name: userInfo.properties.nickname,
      userId: String(userInfo.id),
      profileImage: userInfo.properties.profile_image,
      type: "KAKAO",
    };
    const newUserInfo = await User.createUser(newUser);
    user.push(newUserInfo);
  }
  return user[0];
};

const userService = { getDecodedUser, getOrCreateUser };

module.exports = userService;
