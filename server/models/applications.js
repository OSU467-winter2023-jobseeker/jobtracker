'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class applications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  applications.init({
    user_id: DataTypes.NUMBER,
    contact_name: DataTypes.STRING,
    employer: DataTypes.STRING,
    employment_type: DataTypes.STRING,
    application_status: DataTypes.STRING,
    application_deadline: DataTypes.DATE,
    location: DataTypes.STRING,
    url: DataTypes.STRING,
    skills: DataTypes.STRING,
    notes: DataTypes.STRING,
    date_applied: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'applications',
  });
  return applications;
};