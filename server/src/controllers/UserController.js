import User from '../models/User';

class UserController {
  async index(_, response) {
    const user = await User.findAll({
      attributes: ['id', 'name', 'email', 'telephone', 'adress'],
    });

    return response.json(user);
  }

  async create(request, response) {
    // Insert data table users
  }
}

export default new UserController();
