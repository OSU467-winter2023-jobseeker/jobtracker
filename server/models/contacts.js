'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contacts.init({
    application_id: DataTypes.NUMBER,
    user_id: DataTypes.NUMBER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    linkedin_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contacts',
  });
  return contacts;
};