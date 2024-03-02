import { Request, Response } from 'express';
import { UserService } from '../../../application/services';
import { UserProps } from '../../../domain';
import { CustomError } from '../../../application/errors';

export class UserController {
  constructor(private readonly service: UserService) {}

  async create(req: Request, res: Response) {
    const { name, email, password }: UserProps = req.body;
    try {
      const token = await this.service.create({ name, email, password });
      res.status(201).json(token);
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

  async signIn(req: Request, res: Response) {
    const { email, password }: UserProps = req.body;
    try {
      const token = await this.service.signIn({ email, password });
      res.status(200).json(token);
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
