import { ProductService } from '../../application/services';
import { ProductController } from '../http/controllers';
import { SequelizeProductRepository } from '../repositories';

export function makeProductController(): ProductController {
  const service = new ProductService(new SequelizeProductRepository());
  return new ProductController(service);
}
