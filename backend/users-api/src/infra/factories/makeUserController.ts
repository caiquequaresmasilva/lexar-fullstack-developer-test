import { UserService } from '../../application/services';
import { JwtAdapter } from '../adapters';
import { UserController } from '../http/controllers/UserController';
import { SequelizeUserRepository } from '../repositories';

export function makeUserController(): UserController {
  const service = new UserService(
    new SequelizeUserRepository(),
    new JwtAdapter(),
  );
  return new UserController(service);
}
