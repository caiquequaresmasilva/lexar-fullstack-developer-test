import { Product, ProductProps } from '../../domain';
import { ProductExistsError, ProductNotFoundError } from '../errors';
import { FilterParams, IProductRepository } from '../repositories';

export class ProductService {
  constructor(private readonly repo: IProductRepository) {}

  async create(data: ProductProps[]): Promise<void> {
    const exists = await Promise.all(data.map(prod => this.repo.exists(prod)));
    if (exists.some(flag => flag)) {
      throw new ProductExistsError();
    }
    const products = data.map(prod => new Product(prod))

    await this.repo.create(products);
  }

  async update(id: string, data: ProductProps[]): Promise<void> {
    const product = await this.repo.findById(id);
    if (!product) {
      throw new ProductNotFoundError();
    }

    product.update(data[0]);
    await this.repo.update(product);
  }

  async delete(id: string): Promise<void> {
    const product = await this.repo.findById(id);
    if (!product) {
      throw new ProductNotFoundError();
    }
    await this.repo.delete(id);
  }

  async search(name: string): Promise<ProductProps[]> {
    return this.repo.searchByName(name);
  }

  async filter(params: FilterParams): Promise<ProductProps[]> {
    return this.repo.filter(params);
  }

  async findAll(): Promise<ProductProps[]> {
    return this.repo.findAll();
  }
}
