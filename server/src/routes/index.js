import { Router } from 'express'

import usersRouter from './users.routes'
import productsRouter from './products.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/products', productsRouter)

export default routes
