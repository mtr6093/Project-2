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
          userId: 1,
        },
        {
          name: "Pepsi",
          section: "Beverages",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          name: "Cookies",
          section: "Snacks",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          name: "Ham",
          section: "Meats",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Milk",
          section: "Dairy",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          name: "Cheese",
          section:"Dairy",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          name: "Bread",
          section:"Bakery",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
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
