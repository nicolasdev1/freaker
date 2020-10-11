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
        sequelize
      }
    )
  }
}

export default Product
