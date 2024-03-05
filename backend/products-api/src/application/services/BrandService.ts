import { Brand, IBrandRepository } from '../repositories';

export class BrandService {
  constructor(private readonly repo: IBrandRepository) {}

  async findAll(): Promise<Brand[]> {
    return this.repo.findAll();
  }
}
