'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Groceries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Groceries.belongsTo(models.User, { foreignKey: "userId" });
    }
  };
  Groceries.init({
    name: DataTypes.STRING,
    section: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Groceries',
  });
  return Groceries;
};