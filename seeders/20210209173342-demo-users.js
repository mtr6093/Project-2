'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Tom",
          username: "tom",
          password: "$2a$10$3sDQubuZCvrIA35dazgvwOq1ZyTtrr4oqZAyL6mnL23EUhSpvmtNa",
          listid: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          
        },
        {
          name: "Joe",
          username: "joe",
          password: "$2a$10$3sDQubuZCvrIA35dazgvwOq1ZyTtrr4oqZAyL6mnL23EUhSpvmtNa",
          listid: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          
        },
        {
          name: "Bailey Tom",
          username: "bailey",
          password: "$2a$10$3sDQubuZCvrIA35dazgvwOq1ZyTtrr4oqZAyL6mnL23EUhSpvmtNa",
          listid: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
          
        ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    }
  };