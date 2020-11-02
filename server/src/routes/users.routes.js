import { Router } from 'express'

import UserController from '../controllers/UserController'

const users = Router()

users.get('/', UserController.index)
users.post('/', UserController.store)
users.put('/:id', UserController.update)
users.get('/:id', UserController.show)
users.delete('/:id', UserController.delete)

export default users
