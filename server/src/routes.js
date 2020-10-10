import { Router } from 'express';

const routes = Router();

import UserController from './controllers/UserController';

routes.get('/users', UserController.index);

export default routes;
