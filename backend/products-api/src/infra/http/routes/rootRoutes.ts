import { Router } from 'express';
import { rootController } from '../controllers';

const rootRoutes = Router()
rootRoutes.get('/',rootController)

export default rootRoutes
