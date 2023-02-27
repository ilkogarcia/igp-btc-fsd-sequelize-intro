'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {name: 'Producto 1', description: 'Descripción 1', price: 10, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Producto 2', description: 'Descripción 2', price: 11, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Producto 3', description: 'Descripción 3', price: 12, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Producto 4', description: 'Descripción 4', price: 13, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Producto 5', description: 'Descripción 5', price: 14, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }

};
