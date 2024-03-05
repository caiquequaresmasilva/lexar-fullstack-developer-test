import { Request, Response } from 'express';
import { BrandService } from '../../../application/services';

export class BrandController {
  constructor(private readonly service: BrandService) {}

  async findAll(_req: Request, res: Response): Promise<void> {
    try {
      const brands = await this.service.findAll();
      res.status(200).json(brands);
    } catch (error) {
      res
        .status(500)
        .json({ error: (<Error>error).message || 'Internal server error' });
    }
  }
}
