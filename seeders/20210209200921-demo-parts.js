'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "parts",
      [
        {
          name: "o-ring",
          partNumber:"R51603",
          userId: 1,
        },
        {
          name: "Grease",
          partNumber:"TY6376",
          userId: 2,
        },
        {
          name: "LocTite",
          partNumber:"TY6304",
          userId: 3,
        },
        {
          name: "Fuel Filter",
          partNumber:"AR50041",
          userId: 1,
        },
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
  },
};