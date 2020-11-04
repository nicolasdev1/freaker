import { Router } from 'express'

import OrderController from '../controllers/OrderController'

const orders = Router()

orders.get('/', OrderController.index)
orders.post('/', OrderController.store)
orders.put('/:id', OrderController.update)
orders.get('/:id', OrderController.show)
orders.delete('/:id', OrderController.delete)

export default orders
