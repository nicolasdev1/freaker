'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
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
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      cost_price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      sale_price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
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
    await queryInterface.dropTable('products')
  }
}
