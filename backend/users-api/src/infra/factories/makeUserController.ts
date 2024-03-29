import { UserService } from '../../application/services';
import { JwtGenerator } from '../adapters';
import { UserController } from '../http/controllers';
import { PrismaUserRepository } from '../repositories';

export function makeUserController(): UserController {
  const service = new UserService(
    new PrismaUserRepository(),
    new JwtGenerator(),
  );
  return new UserController(service);
}
