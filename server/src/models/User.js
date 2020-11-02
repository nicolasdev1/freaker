import { Model, DataTypes } from 'sequelize'

class User extends Model {
  static init (sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        address: DataTypes.ARRAY(DataTypes.JSON),
        phone: DataTypes.STRING
      },
      {
        sequelize,
        tableName: 'users'
      }
    )
  }

  static associate (models) {
    this.hasMany(models.Order, { foreignKey: 'user_id', as: 'orders' })
  }
}

export default User
