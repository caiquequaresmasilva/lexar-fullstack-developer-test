import { UserRepository } from '../../application/repositories';
import { User } from '../../domain';
import { prismaClient } from '../database/prisma/prismaClient';

export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma = prismaClient) {}
  async create({ id, name, email, password }: User): Promise<void> {
    await this.prisma.phoneUser.create({
      data: {
        id,
        name,
        email,
        password,
      },
    });
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.phoneUser.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return null;
    }
    return new User(
      {
        name: user.name,
        email: user.email,
        password: user.password,
      },
      user.id,
    );
  }
}
