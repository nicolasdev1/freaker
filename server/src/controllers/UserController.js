import User from '../models/User'

class UserController {
  async index (_, response) {
    try {
      const users = await User.findAll()

      return response.status(200).json(users)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async store (request, response) {
    const {
      name,
      address,
      phone
    } = request.body

    try {
      const user = await User.create({
        name,
        address,
        phone
      })

      return response.status(201).json(user)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async update (request, response) {
    const { id } = request.params

    const {
      name,
      address,
      phone
    } = request.body

    try {
      const user = await User.findByPk(id)

      if (!user) {
        return response.status(400).json({ error: 'The user does not exist.' })
      }

      await user.update({
        name,
        address,
        phone
      })

      return response.status(200).json(user)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async show (request, response) {
    const { id } = request.params

    try {
      const user = await User.findByPk(id, {
        include: { association: 'orders' }
      })

      if (!user) {
        return response.status(400).json({ error: 'The user does not exist.' })
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
        return response.status(400).json({ error: 'The user does not exist.' })
      }

      await user.destroy({ where: { id } })

      return response.status(204).send()
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}

export default new UserController()
