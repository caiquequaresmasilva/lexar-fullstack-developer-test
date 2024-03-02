import { Request, Response } from 'express';

export async function rootController(
  _req: Request,
  res: Response,
): Promise<void> {
  res.status(200).send('User API running!');
}
