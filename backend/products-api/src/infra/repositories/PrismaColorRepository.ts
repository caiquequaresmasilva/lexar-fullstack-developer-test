import { Color, IColorRepository } from '../../application/repositories';
import { prismaClient } from '../database/prisma/prismaClient';

export default class PrismaColorRepository implements IColorRepository {
  constructor(private readonly prisma = prismaClient) {}
  async findAll(): Promise<Color[]> {
    return this.prisma.phoneColor.findMany()
  }
}
