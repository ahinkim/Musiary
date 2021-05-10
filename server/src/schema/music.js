module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define(
    "Music",
    {
      name: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      singer: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: false,
      },
      mood: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Music.associate = (db) => {
    db.Music.belongsToMany(db.User, { through: "User_Music" });
  };
  return Music;
};
