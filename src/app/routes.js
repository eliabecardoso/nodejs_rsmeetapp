import { Router } from 'express';

import authMiddleware from './middlewares/authMiddleware';

import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
