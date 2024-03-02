import { Router } from 'express';
import { rootController } from '../controllers';
import userRoutes from './userRoutes';

const rootRoutes = Router()
rootRoutes.get('/',rootController)

export default rootRoutes
