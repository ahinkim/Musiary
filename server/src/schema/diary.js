module.exports = (sequelize, DataTypes) => {
  const Diary = sequelize.define(
    "Diary",
    {
      title: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      mood: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Diary.associate = (db) => {
    db.Diary.belongsTo(db.User);
  };
  return Diary;
};
