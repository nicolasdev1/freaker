import { Router } from 'express'

import UserController from './controllers/UserController'
import ProductController from './controllers/ProductController'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.get('/users/:id', UserController.show)
routes.delete('/users/:id', UserController.delete)

routes.get('/products', ProductController.index)
routes.post('/products', ProductController.store)
routes.put('/products/:id', ProductController.update)
routes.get('/products/:id', ProductController.show)
routes.delete('/products/:id', ProductController.delete)

export default routes
