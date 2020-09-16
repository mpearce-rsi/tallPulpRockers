module.exports = function (sequelize, DataTypes) {
  const Pose = sequelize.define("Pose", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    pose_name: {
      type: DataTypes.STRING,
    },
    sanskrit_name: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    translation_0: {
      type: DataTypes.STRING,
    },
    translation_1: {
      type: DataTypes.STRING,
    },
    translation_2: {
      type: DataTypes.STRING,
    },
    translation_3: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    difficulty: {
      type: DataTypes.STRING,
    },
    description_0: {
      type: DataTypes.STRING,
    },
    description_1: {
      type: DataTypes.STRING,
    },
    description_2: {
      type: DataTypes.STRING,
    },
    benefits: {
      type: DataTypes.STRING,
    },
    alt_name: {
      type: DataTypes.STRING,
    },
    translation_4: {
      type: DataTypes.STRING,
    },
    translation_5: {
      type: DataTypes.STRING,
    },
    translation_6: {
      type: DataTypes.STRING,
    },
    description_3: {
      type: DataTypes.STRING,
    },
    description_4: {
      type: DataTypes.STRING,
    },
  });
  return Pose;
};
