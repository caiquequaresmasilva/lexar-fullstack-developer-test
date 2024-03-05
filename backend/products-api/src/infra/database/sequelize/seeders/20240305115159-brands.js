'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('brands', [
      { name: 'Samsung' },
      { name: 'Apple' },
      { name: 'Xiaomi' },
      { name: 'Oppo' },
      { name: 'Vivo' },
      { name: 'Realme' },
      { name: 'Motorola' },
      { name: 'Huawei' },
      { name: 'Transsion' },
      { name: 'Honor' },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('brands', null, {})
  }
};
