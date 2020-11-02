import { Router } from 'express'

import users from './users.routes'
import products from './products.routes'
import orders from './orders.routes'

const routes = Router()

routes.use('/users', users)
routes.use('/products', products)
routes.use('/orders', orders)

export default routes
