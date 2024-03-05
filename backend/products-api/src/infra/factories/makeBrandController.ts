import { BrandService } from '../../application/services';
import { BrandController } from '../http/controllers';
import { SequelizeBrandRepository } from '../repositories';

export function makeBrandController(): BrandController {
  const service = new BrandService(new SequelizeBrandRepository());
  return new BrandController(service);
}
