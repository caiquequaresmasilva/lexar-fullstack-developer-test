import { User } from '../../domain';

export interface UserRepository {
  create(data: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>
}
