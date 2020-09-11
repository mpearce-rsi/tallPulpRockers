module.exports = function (sequelize, DataTypes) {
  const Pose = sequelize.define("Pose", {
    post_name: {
      type: DataTypes.STRING,
    },
    sanskrit_name: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    difficulty: {
      type: DataTypes.STRING,
    },
    benefits: {
      type: DataTypes.STRING,
    },
    alt_name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    translation: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  });
  return Pose;
};
