'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('contacts', [{
      application_id: 7,
      user_id: 5,
      first_name: "Bob",
      last_name: "Googler",
      email: "varchar",
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
