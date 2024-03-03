'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products',{
        id: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.STRING
        },
        name: {
          allowNull:false,
          type: Sequelize.STRING
        },
        brand: {
          allowNull:false,
          type: Sequelize.STRING
        },
        model: {
          allowNull:false,
          type: Sequelize.STRING
        },
        price: {
          allowNull:false,
          type: Sequelize.INTEGER
        },
        color: {
          allowNull:false,
          type: Sequelize.STRING
        }
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
