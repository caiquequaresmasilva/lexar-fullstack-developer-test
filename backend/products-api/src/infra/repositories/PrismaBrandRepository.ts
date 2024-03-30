import { Brand, IBrandRepository } from '../../application/repositories';
import { prismaClient } from '../database/prisma/prismaClient';

export default class PrismaBrandRepository implements IBrandRepository {
  constructor(private readonly prisma = prismaClient) {}
  async findAll(): Promise<Brand[]> {
    return this.prisma.phoneBrand.findMany()
  }
}
