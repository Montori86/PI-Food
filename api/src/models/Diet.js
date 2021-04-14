const { DataTypes } = require("sequelize");
const Recipe = require("./Recipe.js");

module.exports = (sequelize) => {
  sequelize.define("diet", {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  });
};
