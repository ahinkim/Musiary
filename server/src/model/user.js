const { User: UserSchema } = require("../schema");
const user = require("../schema/user");

const createUser = async (user) => {
  const newUser = await UserSchema.create(user);
  return newUser;
};

const getUsers = async () => {
  const users = await UserSchema.findAll();
  if (!users.length) {
    return null;
  }

  return users;
};

const getUserById = async (id) => {
  const users = await UserSchema.findAll({
    where: {
      id,
    },
  });

  if (!users.length) return null;
  return users[0];
};

const getUserByUserId = async (userId) => {
  const users = await UserSchema.findAll({
    where: {
      userId,
    },
  });

  if (!users.length) return null;
  return users[0];
};

const updateUser = async (user, targetId) => {
  const { name, type } = user;
  await UserSchema.update(
    { name, type },
    {
      where: {
        id: targetId,
      },
    }
  );
};

const deleteUserById = async (id) => {
  await UserSchema.destroy({
    where: {
      id,
    },
  });
};

const User = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUserById,
  getUserByUserId,
};

module.exports = User;
