import { ColorService } from '../../application/services';
import { ColorController } from '../http/controllers';
import { PrismaColorRepository } from '../repositories';

export function makeColorController(): ColorController {
  const service = new ColorService(new PrismaColorRepository());
  return new ColorController(service);
}
