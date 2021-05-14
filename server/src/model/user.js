const { User: UserSchema } = require("../schema");
const user = require("../schema/user");

const createUser = async (user) => {
  const newUser = await UserSchema.create(user);
  return newUser;
};

const getUserById = async (id) => {
  const users = await UserSchema.findAll({
    where: {
      id,
    },
  });

  if (!users.length) return null;
  return users[0].dataValues;
};

const getUserByUserId = async (UserId) => {
  const user = await UserSchema.findAll({
    where: {
      UserId,
    },
  });

  if (!user.length) return null;
  return user[0].dataValues;
};

const User = {
  createUser,
  getUserById,
  getUserByUserId,
};

module.exports = User;
