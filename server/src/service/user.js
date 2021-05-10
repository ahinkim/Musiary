const User = require("../model/user");

const getDecodedUser = async (id, name) => {
  const user = await User.getUserById(id);
  return user;
};

const getOrCreateUser = async (userInfo) => {
  console.log({ userInfo });
  let user = await User.getUserByUserId(userInfo.id);
  if (user.length === 0) {
    const newUser = {
      name: userInfo.name,
      userId: userInfo.properties.nickname,
      profileImage: userInfo.properties.profile_image,
      type: "KAKAO",
    };
    user = await User.createUser(newUser);
  }
  return user[0];
};

const userService = { getDecodedUser, getOrCreateUser };

module.exports = userService;
