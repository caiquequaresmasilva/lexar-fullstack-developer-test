import { UserService } from '../../src/application/services';
import { InMemoryTokenAdapter, InMemoryUserRepo } from '../mocks';

export function makeInMemoryUserService(): UserService {
  const repo = new InMemoryUserRepo();
  const token = new InMemoryTokenAdapter();
  return new UserService(repo, token);
}
