'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Tom Tom",
          username: "tom",
          password: "tom1",
          listid: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          
        },
        {
          name: "Joe Joe",
          username: "joe",
          password: "joe1",
          listid: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          
        },
        {
          name: "Bailey Tom",
          username: "bailey",
          password: "dog1",
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