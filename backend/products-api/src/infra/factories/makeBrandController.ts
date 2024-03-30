import { BrandService } from '../../application/services';
import { BrandController } from '../http/controllers';
import { PrismaBrandRepository } from '../repositories';

export function makeBrandController(): BrandController {
  const service = new BrandService(new PrismaBrandRepository() );
  return new BrandController(service);
}
