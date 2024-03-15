import { UserService } from '../../application/services';
import { JwtGenerator } from '../adapters';
import { UserController } from '../http/controllers';
import { SequelizeUserRepository } from '../repositories';

export function makeUserController(): UserController {
  const service = new UserService(
    new SequelizeUserRepository(),
    new JwtGenerator(),
  );
  return new UserController(service);
}
