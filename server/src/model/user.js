const { User: UserSchema } = require("../schema");

const createUser = async (user) => {
  return await UserSchema.create(user);
};

const getUsers = async () => {
  return await UserSchema.findAll();
};

const getUserById = async (id) => {
  console.log(id);
  const user = await UserSchema.findAll({
    where: {
      id,
    },
  });

  if (user.length === 0) return null;
  return user[0];
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
