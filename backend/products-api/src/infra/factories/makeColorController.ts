import { ColorService } from '../../application/services';
import { ColorController } from '../http/controllers';
import { SequelizeColorRepository } from '../repositories';

export function makeColorController(): ColorController {
  const service = new ColorService(new SequelizeColorRepository());
  return new ColorController(service);
}
