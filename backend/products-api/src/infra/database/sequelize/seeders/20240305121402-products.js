'use strict';

const { randomUUID } = require('crypto');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      { 
        id: randomUUID(),
        name: 'Xiaomi Redmi 1',
        brandId: 3,
        model: 'Redmi 1',
        colorId: 6,
        price: 1000 
      },
      {
        id: randomUUID(), 
        name: 'Xiaomi Redmi 2',
        brandId: 3,
        model: 'Redmi 2',
        colorId: 1,
        price: 2000 
      },
      { 
        id: randomUUID(), 
        name: 'Xiaomi Redmi 3',
        brandId: 3,
        model: 'Redmi 3',
        colorId: 2,
        price: 3000 
      },
      { 
        id: randomUUID(), 
        name: 'Iphone 10',
        brandId: 2,
        model: '10',
        colorId: 3,
        price: 5000 
      },
      { 
        id: randomUUID(), 
        name: 'Iphone 11',
        brandId: 2,
        model: '11',
        colorId: 3,
        price: 6000 
      },
      { 
        id: randomUUID(), 
        name: 'Iphone 14 Pro',
        brandId: 2,
        model: '14 Pro',
        colorId: 7,
        price: 10000 
      },
      { 
        id: randomUUID(), 
        name: 'Galaxy S10',
        brandId: 1,
        model: 'S10',
        colorId: 1,
        price: 5000 
      },
      { 
        id: randomUUID(), 
        name: 'Galaxy S10 Plus',
        brandId: 1,
        model: 'S10 Plus',
        colorId: 2,
        price: 6000 
      },
      { 
        id: randomUUID(), 
        name: 'Galaxy S22 Plus',
        brandId: 1,
        model: 'S22 Plus',
        colorId: 2,
        price: 10000 
      },
      { 
        id: randomUUID(), 
        name: 'Galaxy S22 Ultra',
        brandId: 1,
        model: 'S22 Ultra',
        colorId: 1,
        price: 12000 
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {})
  }
};
