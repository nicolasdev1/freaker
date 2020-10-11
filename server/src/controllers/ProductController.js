import Product from '../models/Product'

class ProductController {
  async index(_, response) {
    try {
      const products = await Product.findAll({
        attributes: [
          'id',
          'name',
          'images',
          'cost_price',
          'sale_price',
          'stock'
        ]
      })

      return response.json(products)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async store(request, response) {
    const {
      name,
      images,
      cost_price,
      sale_price,
      stock
    } = request.body

    try {
      const product = await Product.create({
        name,
        images,
        cost_price,
        sale_price,
        stock
      })

      return response.json(product)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async update(request, response) {
    const { id } = request.params

    const {
      name,
      images,
      cost_price,
      sale_price,
      stock
    } = request.body

    try {
      const product = await Product.findByPk(id)

      if (!product) {
        return response.status(400).json({ error: 'O produto não existe.' })
      }

      await product.update({
        name,
        images,
        cost_price,
        sale_price,
        stock
      })

      return response.status(200).json(product)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async show(request, response) {
    const { id } = request.params

    try {
      const product = await Product.findByPk(id, {
        attributes: [
          'id',
          'name',
          'images',
          'cost_price',
          'sale_price',
          'stock'
        ]
      })

      if (!product) {
        return response.status(400).json({ error: 'O produto não existe.' })
      }

      return response.status(200).json(product)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async delete(request, response) {
    const { id } = request.params

    try {
      const product = await Product.findByPk(id)

      if (!product) {
        return response.status(400).json({ error: 'O produto não existe.' })
      }

      await product.destroy({ where: { id } })

      return response.status(200).json({ message: 'Produto removido com sucesso.' })
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}

export default new ProductController()
