import { Model, DataTypes } from 'sequelize'

class User extends Model {
  static init (sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        address: DataTypes.JSON,
        phone: DataTypes.STRING
      },
      {
        sequelize
      }
    )
  }
}

export default User
