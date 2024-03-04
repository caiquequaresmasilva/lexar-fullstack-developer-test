import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'joi';
import { productSchema } from '../../schemas';
import { ProductProps } from '../../../domain';

type ProductRequest = Partial<ProductProps>[];

export async function validationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const productRequest: ProductRequest = req.body;
  try {
      await Promise.all(
        productRequest.map(prod => productSchema.validateAsync(prod)),
      );

    next();
  } catch (e) {
    if (e instanceof ValidationError) {
      res.status(400).json({ error: e.message });
    } else {
      res
        .status(500)
        .json({ error: (<Error>e).message || 'Internal server error' });
    }
  }
}
