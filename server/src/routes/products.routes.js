import { Router } from 'express'

import ProductController from '../controllers/ProductController'

const productsRouter = Router()

productsRouter.get('/', ProductController.index)
productsRouter.post('/', ProductController.store)
productsRouter.put('/:id', ProductController.update)
productsRouter.get('/:id', ProductController.show)
productsRouter.delete('/:id', ProductController.delete)

export default productsRouter
