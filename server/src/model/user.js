const { User: UserSchema } = require("../schema");

const createUser = async (user) => {
  return await UserSchema.create(user);
};

const getUsers = async () => {
  return await UserSchema.findAll();
};

const getUserById = async (id) => {
  const user = await UserSchema.findAll({
    where: {
      id,
    },
  });

  return user;
};

const getUserByUserId = async (userId) => {
  const user = await UserSchema.findAll({
    where: {
      userId,
    },
  });
  return user;
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
