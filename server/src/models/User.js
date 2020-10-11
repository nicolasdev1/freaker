import { Model, DataTypes } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING(100),
        adress: DataTypes.STRING(200),
        telephone: DataTypes.STRING(15),
        email: DataTypes.STRING(50),
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
