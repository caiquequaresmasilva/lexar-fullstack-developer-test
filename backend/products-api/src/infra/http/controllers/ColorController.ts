import { Request, Response } from 'express';
import { ColorService } from '../../../application/services';

export class ColorController {
  constructor(private readonly service: ColorService) {}

  async findAll(_req: Request, res: Response): Promise<void> {
    try {
      const colors = await this.service.findAll();
      res.status(200).json(colors);
    } catch (error) {
      res
        .status(500)
        .json({ error: (<Error>error).message || 'Internal server error' });
    }
  }
}
