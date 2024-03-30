import { ProductService } from '../../application/services';
import { ProductController } from '../http/controllers';
import { PrismaProductRepository } from '../repositories';

export function makeProductController(): ProductController {
  const service = new ProductService(new PrismaProductRepository());
  return new ProductController(service);
}
