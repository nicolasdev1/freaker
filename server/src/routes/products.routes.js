import { Router } from 'express'

import ProductController from '../controllers/ProductController'

const products = Router()

products.get('/', ProductController.index)
products.post('/', ProductController.store)
products.put('/:id', ProductController.update)
products.get('/:id', ProductController.show)
products.delete('/:id', ProductController.delete)

export default products
