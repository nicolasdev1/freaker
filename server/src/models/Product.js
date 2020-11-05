import { Model, DataTypes } from 'sequelize'

class Product extends Model {
  static init (sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        images: DataTypes.ARRAY(DataTypes.STRING),
        cost_price: DataTypes.DOUBLE,
        sale_price: DataTypes.DOUBLE,
        stock: DataTypes.INTEGER
      },
      {
        sequelize,
        tableName: 'products'
      }
    )
  }

  static associate (models) {
    this.belongsToMany(models.Order, {
      through: 'order_items',
      as: 'orders',
      foreignKey: 'product_id'
    })
  }
}

export default Product
