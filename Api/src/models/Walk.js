const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Walk",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      duration: {
        type: DataTypes.ENUM("20 min", "30 min", "60 min"),
        allowNull: false,
      },
      cost: {
        type: DataTypes.ENUM("8", "12", "20"),
        allowNull: false,
      },
      fee: {
        type: DataTypes.FLOAT,
        defaultValue: 1.5,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      emergency: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
