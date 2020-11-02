import { Model, DataTypes } from 'sequelize'

class Order extends Model {
  static init (sequelize) {
    super.init(
      {
        products: DataTypes.ARRAY(DataTypes.JSON),
        status: DataTypes.STRING
      },
      {
        sequelize,
        tableName: 'orders'
      }
    )
  }

  static associate (models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

export default Order
