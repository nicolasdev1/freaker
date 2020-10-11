import User from '../models/User'

class UserController {
  async index (_, response) {
    const users = await User.findAll({
      attributes: [
        'id',
        'name',
        'email',
        'street',
        'number',
        'neighborhood',
        'city',
        'uf',
        'telephone'
      ]
    })

    return response.json(users)
  }

  async store (request, response) {
    const {
      name,
      email,
      street,
      number,
      neighborhood,
      city,
      uf,
      telephone
    } = request.body

    try {
      const user = await User.create({
        name,
        email,
        street,
        number,
        neighborhood,
        city,
        uf,
        telephone
      })

      return response.json(user)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async update (request, response) {
    const { id } = request.params

    const {
      name,
      email,
      street,
      number,
      neighborhood,
      city,
      uf,
      telephone
    } = request.body

    try {
      const user = await User.findByPk(id)

      if (!user) {
        return response.status(400).json({ error: 'O usuário não existe.' })
      }

      await user.update({
        name,
        email,
        street,
        number,
        neighborhood,
        city,
        uf,
        telephone
      })

      return response.status(200).json(user)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async show (request, response) {
    const { id } = request.params

    try {
      const user = await User.findByPk(id)

      if (!user) {
        return response.status(400).json({ error: 'O usuário não existe.' })
      }

      return response.status(200).json(user)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async delete (request, response) {
    const { id } = request.params

    try {
      const user = await User.findByPk(id)

      if (!user) {
        return response.status(400).json({ error: 'O usuário não existe.' })
      }

      await user.destroy({ where: { id } })

      return response.status(200).json({ message: 'Usuário deletado com sucesso.' })
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}

export default new UserController()
