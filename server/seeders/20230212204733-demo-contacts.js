'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('contacts', [{
      user_id: 5,
      full_name: "Bob Googler",
      position: 'GCP Manager',
      email: "varchar@varchar.com",
      phone_number: "555-675-8855",
      linkedin_url: "http://linkedin.com/in/bob-googler",
      created_at: new Date(),
      updated_at: new Date()
    }]);
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('applications', null, {});
  }
};
