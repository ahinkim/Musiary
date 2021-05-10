module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      profileImage: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  User.associate = (db) => {
    db.User.hasMany(db.Diary);
    db.User.belongsToMany(db.Music, { through: "User_Music" });
  };

  return User;
};
