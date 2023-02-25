'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('contacts', [{
      user_id: "testString123",
      full_name: "Bob Googler",
      position: 'GCP Manager',
      email: "varchar@varchar.com",
      phone_number: "555-675-8855",
      linkedin_url: "http://linkedin.com/in/bob-googler",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: "testString123",
      full_name: "Bob Googler2",
      position: 'GCP Manager2',
      email: "varchar2@varchar.com",
      phone_number: "555-675-8852",
      linkedin_url: "http://linkedin.com/in/bob-googler2",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: "testString123",
      full_name: "Bob Googler3",
      position: 'GCP Manager3',
      email: "varchar3@varchar.com",
      phone_number: "555-675-8853",
      linkedin_url: "http://linkedin.com/in/bob-googler3",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: "testString123",
      full_name: "Bob Googler4",
      position: 'GCP Manager4',
      email: "varchar4@varchar.com",
      phone_number: "555-675-8854",
      linkedin_url: "http://linkedin.com/in/bob-googler4",
      created_at: new Date(),
      updated_at: new Date()
    },
  ]);
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('contacts', null, {});
  }
};
