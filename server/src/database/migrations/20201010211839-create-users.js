'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.ARRAY(Sequelize.JSON({
          street: {
            type: Sequelize.STRING,
            allowNull: false
          },
          number: {
            type: Sequelize.STRING,
            allowNull: false
          },
          neighborhood: {
            type: Sequelize.STRING,
            allowNull: false
          },
          zipcode: {
            type: Sequelize.STRING,
            allowNull: false
          },
          city: {
            type: Sequelize.STRING,
            allowNull: false
          },
          state: {
            type: Sequelize.STRING,
            allowNull: false
          }
        })),
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users')
  }
}
