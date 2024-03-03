import { NextFunction, Request, Response } from 'express';
import { ITokenAdapter } from '../../adapters/ITokenAdapter';
import { CustomError } from '../../../application/errors';

export class AuthMiddleware {
  constructor(private readonly tokenManager: ITokenAdapter) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    const bearerToken = req.headers.authorization || '';
    const token = bearerToken.split(' ')[1] || '';
    try {
      this.tokenManager.validate(token);
      next();
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.status).json({ error: error.message });
      } else {
        res
          .status(500)
          .json({ error: (<Error>error).message || 'Internal server error' });
      }
    }
  }
}
