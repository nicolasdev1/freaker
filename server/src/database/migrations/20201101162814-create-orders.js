'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      products: {
        type: Sequelize.ARRAY(Sequelize.JSON({
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
          }
        })),
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Pendente'
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at'
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at'
      }
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('orders')
  }
}
