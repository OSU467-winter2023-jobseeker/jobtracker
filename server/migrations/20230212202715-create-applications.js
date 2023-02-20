'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('applications', {
      application_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      contact_id: {
        type: Sequelize.INTEGER
      },
      employer: {
        type: Sequelize.STRING
      },
      employment_type: {
        type: Sequelize.STRING
      },
      application_status: {
        type: Sequelize.STRING
      },
      application_deadline: {
        type: Sequelize.DATE
      },
      location: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      skills: {
        type: Sequelize.STRING
      },
      date_applied: {
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('applications');
  }
};