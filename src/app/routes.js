import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';

import authMiddleware from './middlewares/authMiddleware';

import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import FileController from './controllers/FileController';
import MeetupController from './controllers/MeetupController';
import SubscriptionMeetupController from './controllers/SubscriptionMeetupController';
import OrganizingController from './controllers/OrganizingController';
import NotificationController from './controllers/NotificationController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.put('/users', UserController.update);

routes.post('/meetups', MeetupController.store);
routes.get('/meetups', MeetupController.index);
routes.put('/meetups/:id', MeetupController.update);
routes.delete('/meetups/:id', MeetupController.destroy);

routes.get('/organizing', OrganizingController.index);

routes.post(
  '/subscriptionmeetups/:meetupId',
  SubscriptionMeetupController.store
);
routes.get('/subscriptionmeetups', SubscriptionMeetupController.index);

export default routes;
