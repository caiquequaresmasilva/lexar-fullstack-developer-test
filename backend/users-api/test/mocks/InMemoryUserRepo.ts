import { UserRepository } from '../../src/application/repositories';
import { User } from '../../src/domain';

export class InMemoryUserRepo implements UserRepository {
  public users: User[] = [];
  public clearData() {
    this.users = [];
  }
  async create(data: User): Promise<void> {
    this.users.push(data);
  }
  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email == email) || null;
  }
}
