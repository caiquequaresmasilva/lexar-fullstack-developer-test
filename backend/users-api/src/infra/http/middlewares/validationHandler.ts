import { NextFunction, Request, Response } from 'express';
import { userSchema } from '../../schemas';

export async function validationHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { name, email, password } = req.body;
  const { error, value } = userSchema.validate({ name, email, password });
  if (error){
    res.status(400).json({ error: error.message})
  }else{
    next()
  }
}
