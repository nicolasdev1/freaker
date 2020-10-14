import { Model, DataTypes } from 'sequelize'

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.STRING,
        neighborhood: DataTypes.STRING,
        city: DataTypes.STRING,
        uf: DataTypes.STRING,
        telephone: DataTypes.STRING
      },
      {
        sequelize
      }
    )
  }
}

export default User
