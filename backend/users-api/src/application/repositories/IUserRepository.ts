import { User } from '../../domain';

export abstract class IUserRepository {
  abstract create(data: User): Promise<void>;
  abstract findByEmail(email: string): Promise<User | null>
}
