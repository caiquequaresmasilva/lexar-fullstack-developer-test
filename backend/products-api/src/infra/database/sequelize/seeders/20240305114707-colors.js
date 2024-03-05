'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('colors', [
      { name: 'black' },
      { name: 'white' },
      { name: 'silver' },
      { name: 'gold' },
      { name: 'blue' },
      { name: 'red' },
      { name: 'purple' },
      { name: 'yellow' },
      { name: 'orange' },
      { name: 'green' },
      { name: 'pink' },
    ], {}); 
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('colors', null, {})
  }
};
