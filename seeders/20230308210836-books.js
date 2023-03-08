'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('books', [{
      title: 'Test Data',
      description: 'Test Data',
      edition: 'Test Data',
      isbn: 'Test Data',
      author: 'Test Data',
      pages: 153,
      rating: 2,
      reviews: 'Test Data',
      createdAt: new Date,
      updatedAt: new Date
     }], {});
    
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
