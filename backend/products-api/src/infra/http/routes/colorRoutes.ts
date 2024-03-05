import { Router } from 'express';
import { makeAuthMiddleware, makeColorController } from '../../factories';

const colorRoutes = Router();
const controller = makeColorController();
const auth = makeAuthMiddleware();

colorRoutes.use((req, res, next) => auth.handle(req, res, next));
colorRoutes.get('/', (req, res) => controller.findAll(req, res));

export default colorRoutes;
