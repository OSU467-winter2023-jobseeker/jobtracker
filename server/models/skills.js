'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  skills.init({
    application_id: DataTypes.NUMBER,
    skill: DataTypes.STRING,
    comfort_level: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'skills',
  });
  return skills;
};