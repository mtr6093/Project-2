'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Groceries",
      [
        {
          name: "Potatoes",
          section: "Produce",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pepsi",
          section: "Beverages",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cookies",
          section: "Snacks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ham",
          section: "Meats",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Milk",
          section: "Dairy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cheese",
          section:"Dairy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bread",
          section:"Bakery",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
