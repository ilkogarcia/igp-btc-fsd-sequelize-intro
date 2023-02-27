'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {message: 'Comentario 1', product_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {message: 'Comentario 2', product_id: 6, createdAt: new Date(), updatedAt: new Date()},
      {message: 'Comentario 3', product_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {message: 'Comentario 4', product_id: 4, createdAt: new Date(), updatedAt: new Date()},
      {message: 'Comentario 5', product_id: 1, createdAt: new Date(), updatedAt: new Date()}
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
