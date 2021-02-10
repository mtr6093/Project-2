'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "parts",
      [
        {
          name: "o-ring",
          partNumber:"R51603",
        },
        {
          name: "Grease",
          partNumber:"TY6376",
        },
        {
          name: "LocTite",
          partNumber:"TY6304",
        },
        {
          name: "Fuel Filter",
          partNumber:"AR50041"
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