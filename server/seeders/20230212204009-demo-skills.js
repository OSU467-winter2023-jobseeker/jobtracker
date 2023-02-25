'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('skills', [{
      application_id: 1,
      skill: 'Python',
      comfort_level: 'Intermediate'
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('skills', null, {});
  }
};
