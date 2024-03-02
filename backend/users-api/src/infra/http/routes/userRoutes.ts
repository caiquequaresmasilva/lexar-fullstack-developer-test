import { Router } from 'express';
import { makeUserController } from '../../factories';

const userRoutes = Router();
const userController = makeUserController();

userRoutes.post('/', (req, res) => userController.create(req, res));
userRoutes.post('/login', (req, res) => userController.signIn(req, res));

export default userRoutes;
