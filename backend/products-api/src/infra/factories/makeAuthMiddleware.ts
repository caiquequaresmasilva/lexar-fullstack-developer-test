import { JwtTokenAdapter } from '../adapters';
import { AuthMiddleware } from '../http/middlewares';

export function makeAuthMiddleware(): AuthMiddleware {
  const tokenManager = new JwtTokenAdapter();
  return new AuthMiddleware(tokenManager);
}
