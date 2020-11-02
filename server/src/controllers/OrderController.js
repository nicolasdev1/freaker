import Order from '../models/Order'
import User from '../models/User'

class OrderController {
  async index (_, response) {
    try {
      const orders = await Order.findAll({
        include: { association: 'user' }
      })

      return response.status(200).json(orders)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async store (request, response) {
    const { user_id } = request.params

    const { products, status } = request.body

    try {
      const user = await User.findByPk(user_id)

      if (!user) {
        return response.status(400).json({ error: 'The user does not exist.' })
      }

      const order = await Order.create({
        products,
        status
      })

      return response.status(201).json(order)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async update (request, response) {
    const { id } = request.params

    const { products, status } = request.body

    try {
      const order = await Order.findByPk(id)

      if (!order) {
        return response.status(400).json({ error: 'The order does not exist.' })
      }

      await order.update({
        products,
        status
      })

      return response.status(200).json(order)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async show (request, response) {
    const { id } = request.params

    try {
      const order = await Order.findByPk(id, {
        include: { association: ['user', 'product'] }
      })

      if (!order) {
        return response.status(400).json({ error: 'The order does not exist.' })
      }

      return response.status(200).json(order)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async delete (request, response) {
    const { id } = request.params

    try {
      const order = await Order.findByPk(id)

      if (!order) {
        return response.status(400).json({ error: 'The order does not exist.' })
      }

      await order.destroy({ where: { id } })

      return response.status(204).send()
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}

export default new OrderController()
