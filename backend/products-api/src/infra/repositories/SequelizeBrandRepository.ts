import { Brand, IBrandRepository } from '../../application/repositories';
import DBBrand from '../database/sequelize/models/DBBrand';

export class SequelizeBrandRepository extends IBrandRepository {
  constructor(private readonly model = DBBrand) {
    super();
  }

  async findAll(): Promise<Brand[]> {
    return this.model.findAll();
  }
}
