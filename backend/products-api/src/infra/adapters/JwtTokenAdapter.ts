import { verify } from 'jsonwebtoken';
import { ITokenAdapter } from './ITokenAdapter';
import { UnauthorizedError } from '../errors';

export class JwtTokenAdapter extends ITokenAdapter {
  validate(token: string): boolean {
    if (!token) {
      throw new UnauthorizedError();
    }
    try {
      verify(token, process.env.TOKEN_SECRET!!);
      return true;
    } catch (error) {
      throw new UnauthorizedError();
    }
  }
}
