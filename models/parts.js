'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class parts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  parts.init({
    name: DataTypes.STRING,
    partNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'parts',
  });
  return parts;
};