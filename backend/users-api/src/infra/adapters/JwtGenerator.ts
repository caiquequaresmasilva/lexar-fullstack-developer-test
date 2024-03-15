import { TokenGenerator } from '../../application/adapters';
import { UserProps } from '../../domain';
import { sign } from 'jsonwebtoken';

export class JwtGenerator implements TokenGenerator {
  generate(payload: Omit<UserProps, 'password'>): string {
    return sign(payload, process.env.TOKEN_SECRET!!,{
      algorithm: 'HS256',
      expiresIn: '1d',
    });
  }
}
