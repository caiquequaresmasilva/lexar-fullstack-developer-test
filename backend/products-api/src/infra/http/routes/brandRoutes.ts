import { Router } from 'express';
import { makeAuthMiddleware, makeBrandController } from '../../factories';

const brandRoutes = Router();
const controller = makeBrandController();
const auth = makeAuthMiddleware();

brandRoutes.use((req, res, next) => auth.handle(req, res, next));
brandRoutes.get('/', (req, res) => controller.findAll(req, res));

export default brandRoutes;
