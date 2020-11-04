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
        sequelize
      }
    )
  }
}

export default User
