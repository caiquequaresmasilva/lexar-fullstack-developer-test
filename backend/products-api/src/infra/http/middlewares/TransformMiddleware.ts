import { NextFunction, Request, Response } from 'express';
import { RawProduct, TransformService } from '../../../application/services';

export class TransformMiddleware {
  constructor(private readonly service: TransformService) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    const rawProduct: RawProduct = req.body;

    try {
      req.body = await this.service.transform(rawProduct);
      next();
    } catch (error) {
      res
        .status(500)
        .json({ error: (<Error>error).message || 'Internal server error' });
    }
  }
}
