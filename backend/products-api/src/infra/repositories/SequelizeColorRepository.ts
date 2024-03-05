import { Color, IColorRepository } from '../../application/repositories';
import DBColor from '../database/sequelize/models/DBColor';

export class SequelizeColorRepository extends IColorRepository {
  constructor(private readonly model = DBColor) {
    super();
  }

  async findAll(): Promise<Color[]> {
    return this.model.findAll();
  }
}
