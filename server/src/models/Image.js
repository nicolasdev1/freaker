import { Model, DataTypes } from 'sequelize'

import Product from './Product'

class Image extends Model {
  static init(sequelize) {
    super.init(
      {
        path: DataTypes.STRING
      },
      {
        sequelize
      }
    )
  }
}

Image.hasOne(Product)
Image.belongsTo(Product, {
  as: 'ProductImage',
  foreignKey: {
    name: 'product_id',
    allowNull: false
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

export default Image
