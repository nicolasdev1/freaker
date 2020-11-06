/* eslint-disable no-unused-vars */
import Order from '../models/Order'
import Product from '../models/Product'
import User from '../models/User'

class OrderController {
  async index (_, response) {
    try {
      const orders = await Order.findAll({
        include: [
          {
            model: User,
            as: 'users'
          },
          {
            model: Product,
            as: 'products',
            through: { atributes: [] }
          }
        ]
      })

      return response.status(200).json(orders)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async store (request, response) {
    try {
      const { products, user_id } = request.body
      const order = await Order.create({ user_id })

      if (products && products.length > 0) {
        order.setProducts(products)
      }

      return response.status(201).json(order)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async update (request, response) {
    try {
      const { id } = request.params

      const { products, status } = request.body

      const order = await Order.findByPk(id)

      if (!order) {
        return response.status(400).json({ error: 'The order does not exist.' })
      }

      await order.update({
        products,
        status
      })

      if (products && products.length > 0) {
        order.setProducts(products)
      }

      return response.status(200).json(order)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async show (request, response) {
    const { id } = request.params

    try {
      const order = await Order.findByPk(id, {
        include: [
          {
            model: User,
            as: 'users'
          },
          {
            model: Product,
            as: 'products',
            through: { atributes: [] }
          }
        ]
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
