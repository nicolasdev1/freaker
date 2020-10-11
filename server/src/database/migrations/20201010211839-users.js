'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
          len: [3, 100],
        },
      },
      adress: {
        allowNull: false,
        type: Sequelize.STRING(200),
        validate: {
          len: [3, 200],
        },
      },
      telephone: {
        allowNull: false,
        type: Sequelize.STRING(15),
        validate: {
          len: [1, 15],
        },
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50),
        validate: {
          len: [5, 50],
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
