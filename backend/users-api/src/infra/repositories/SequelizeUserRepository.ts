import { UserRepository } from '../../application/repositories';
import { User } from '../../domain';
import DBUser from '../database/sequelize/models/DBUser';

export class SequelizeUserRepository implements UserRepository {
  constructor(private readonly model = DBUser) {}

  private _mapToDomain(dbUser: DBUser): User {
    return new User(
      {
        name: dbUser.name,
        email: dbUser.email,
        password: dbUser.password,
      },
      dbUser.id,
    );
  }

  async create({ id, name, email, password }: User): Promise<void> {
    await this.model.create({
      id,
      name,
      email,
      password,
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const dbUser = await this.model.findOne({
      where: {
        email,
      },
    });
    return dbUser ? this._mapToDomain(dbUser) : null;
  }
}