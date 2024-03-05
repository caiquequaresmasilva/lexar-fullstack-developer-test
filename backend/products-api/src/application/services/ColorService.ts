import { Color, IColorRepository } from '../repositories';

export class ColorService {
  constructor(private readonly repo: IColorRepository) {}

  async findAll(): Promise<Color[]> {
    return this.repo.findAll();
  }
}
