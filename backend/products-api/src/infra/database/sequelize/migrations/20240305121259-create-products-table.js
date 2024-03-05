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
        brandId: {
          allowNull:false,
          type: Sequelize.INTEGER,
          references:{
            model: 'brands',
            key: 'id'
          }
        },
        model: {
          allowNull:false,
          type: Sequelize.STRING
        },
        price: {
          allowNull:false,
          type: Sequelize.INTEGER
        },
        colorId: {
          allowNull:false,
          type: Sequelize.INTEGER,
          references:{
            model: 'colors',
            key: 'id'
          }
        }
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
