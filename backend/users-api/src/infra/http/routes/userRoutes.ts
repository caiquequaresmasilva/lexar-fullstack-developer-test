import { Router } from 'express';
import { makeUserController } from '../../factories';
import { validationHandler } from '../middlewares';

const userRoutes = Router();
const userController = makeUserController();

userRoutes.post(
  '/',
  (req, res, next) => validationHandler(req, res, next),
  (req, res) => userController.create(req, res),
);
userRoutes.post('/login', (req, res) => userController.signIn(req, res));

export default userRoutes;
