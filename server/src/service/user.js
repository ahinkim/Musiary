const User = require("../model/user");

const getDecodedUser = async (id) => await User.getUserById(id);

const getOrCreateUser = async (userInfo) => {
  let users = await User.getUserByUserId(userInfo.id);
  console.log(users);
  if (users) return users;

  const newUser = {
    name: userInfo.properties.nickname,
    userId: String(userInfo.id),
    profileImage: userInfo.properties.profile_image,
    type: "KAKAO",
  };

  return await User.createUser(newUser);
};

const userService = { getDecodedUser, getOrCreateUser };

module.exports = userService;
