module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define(
    "Music",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: false,
      },
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: false,
      },
      mood: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: false,
      },
      coverImg: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: false,
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
