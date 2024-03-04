import { Router } from 'express';
import { validationMiddleware } from '../middlewares';
import {
  makeProductController,
  makeAuthMiddleware,
  makeTransformMiddleware,
} from '../../factories';

const controller = makeProductController();
const auth = makeAuthMiddleware();
const transform = makeTransformMiddleware();
const productRoutes = Router();

//Middleware de autenticação
productRoutes.use((req, res, next) => auth.handle(req, res, next));

productRoutes.get('/', (req, res) => controller.findAll(req, res));
productRoutes.get('/:id', (req, res) => controller.findById(req, res));
productRoutes.get('/search', (req, res) => controller.search(req, res));
productRoutes.get('/filter', (req, res) => controller.filter(req, res));
productRoutes.delete('/:id', (req, res) => controller.delete(req, res));


//Middlewares de transformação e validação
productRoutes.use((req, res, next) => transform.handle(req, res, next));
productRoutes.use(validationMiddleware);

productRoutes.post('/', (req, res) => controller.create(req, res));
productRoutes.put('/:id', (req, res) => controller.update(req, res));
