'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('colors',{
        id: {
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          type: Sequelize.INTEGER
        },
        name: {
          allowNull:false,
          type: Sequelize.STRING
        }

      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('colors')
  }
};
