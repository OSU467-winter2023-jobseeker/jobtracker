'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('applications', [{
      user_id: 5,
      employer: "Google",
      employment_type: "Software Engineer",
      application_status: "Applied",
      application_deadline: new Date('03-05-2023'),
      date_applied: new Date('02-02-2023'),
      location: "Houston, TX",
      url: "https://careers.google.com/jobs/results/83234373689582278/",
      contact_name: 'Bob Googler',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 5,
      employer: "Google2",
      employment_type: "Software Engineer",
      application_status: "Applied",
      application_deadline: new Date('03-05-2023'),
      date_applied: new Date('02-02-2023'),
      location: "Houston, TX",
      url: "https://careers.google.com/jobs/results/83234373689582278/",
      contact_name: 'Bob Googler',
      created_at: new Date(),
      updated_at: new Date()
    },{
      user_id: 5,
      employer: "Google3",
      employment_type: "Software Engineer",
      application_status: "Applied",
      application_deadline: new Date('03-05-2023'),
      date_applied: new Date('02-02-2023'),
      location: "Houston, TX",
      url: "https://careers.google.com/jobs/results/83234373689582278/",
      contact_name: 'Bob Googler',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 5,
      employer: "Google4",
      employment_type: "Software Engineer",
      application_status: "Applied",
      application_deadline: new Date('03-05-2023'),
      date_applied: new Date('02-02-2023'),
      location: "Houston, TX",
      url: "https://careers.google.com/jobs/results/83234373689582278/",
      contact_name: 'Bob Googler',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 5,
      employer: "Google5",
      employment_type: "Software Engineer",
      application_status: "Applied",
      application_deadline: new Date('03-05-2023'),
      date_applied: new Date('02-02-2023'),
      location: "Houston, TX",
      url: "https://careers.google.com/jobs/results/83234373689582278/",
      contact_name: 'Bob Googler',
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('applications', null, {});
  }
};
