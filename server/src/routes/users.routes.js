import { Router } from 'express'

import UserController from '../controllers/UserController'

const usersRouter = Router()

usersRouter.get('/', UserController.index)
usersRouter.post('/', UserController.store)
usersRouter.put('/:id', UserController.update)
usersRouter.get('/:id', UserController.show)
usersRouter.delete('/:id', UserController.delete)

export default usersRouter
