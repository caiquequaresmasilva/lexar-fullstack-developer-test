import {
  FilterParams,
  IProductRepository,
} from '../../application/repositories';
import { Product, ProductProps } from '../../domain';
import { prismaClient } from '../database/prisma/prismaClient';
import { Indexable } from '../utils';

export default class PrismaProductRepository implements IProductRepository {
  private _colorsMap!: Indexable<number>;
  private _brandsMap!: Indexable<number>;
  private _mapsFlag = false;

  constructor(private readonly prisma = prismaClient) {}

  private async _setMaps() {
    if (!this._mapsFlag) {
      const colors = await this.prisma.phoneColor.findMany();
      const brands = await this.prisma.phoneBrand.findMany();

      this._colorsMap = colors.reduce((acc, curr) => {
        return { ...acc, [curr.name]: curr.id };
      }, {});
      this._brandsMap = brands.reduce((acc, curr) => {
        return { ...acc, [curr.name]: curr.id };
      }, {});
      this._mapsFlag = true;
    }
  }

  private async _mapToDB({ id, name, brand, price, color, model }: Product) {
    return {
      id,
      name,
      brandId: this._brandsMap[brand],
      model,
      price,
      colorId: this._colorsMap[color],
    };
  }

  private _mapToProps({ id, name, brand, color, model, price }: any) {
    return {
      id,
      name,
      brand: brand.name,
      model,
      price,
      color: color.name,
    };
  }
  async create(data: Product[]): Promise<void> {
    await this._setMaps();
    const toDB = await Promise.all(data.map(prod => this._mapToDB(prod)));

    await this.prisma.phoneProduct.createMany({
      data: toDB,
    });
  }

  async update(data: Product): Promise<void> {
    await this._setMaps();
    const { id, name, colorId, brandId, price, model } =
      await this._mapToDB(data);
    await this.prisma.phoneProduct.update({
      where: {
        id,
      },
      data: {
        name,
        model,
        colorId,
        brandId,
        price,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.phoneProduct.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<Product | null> {
    const product = await this.prisma.phoneProduct.findUnique({
      where: {
        id,
      },
      include: {
        brand: {
          select: {
            name: true,
          },
        },
        color: {
          select: {
            name: true,
          },
        },
      },
    });
    if (!product) {
      return null;
    }
    return new Product(
      {
        name: product.name,
        brand: product.brand.name,
        model: product.model,
        color: product.color.name,
        price: product.price,
      },
      product.id,
    );
  }

  async filter({
    brand,
    color,
    maxPrice,
    minPrice,
    name,
  }: FilterParams): Promise<ProductProps[]> {
    
    const products = await this.prisma.phoneProduct.findMany({
      where: {
        color: {
          is: {
            name: color,
          },
        },
        brand: {
          is: {
            name: brand,
          },
        },
        price: {
          lte: maxPrice,
          gte: minPrice,
        },
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
      include: {
        brand: true,
        color: true,
      },
    });
    return products.map(this._mapToProps);
  }
  async findAll(): Promise<ProductProps[]> {
    const products = await this.prisma.phoneProduct.findMany({
      include: {
        brand: true,
        color: true,
      },
    });
    return products.map(this._mapToProps);
  }
  async exists({
    brand,
    color,
    model,
    name,
    price,
  }: ProductProps): Promise<boolean> {
    const product = await this.prisma.phoneProduct.findFirst({
      where: {
        brand: {
          is: {
            name: brand,
          },
        },
        color: {
          is: {
            name: color,
          },
        },
        name,
        model,
        price,
      },
    });

    return Boolean(product);
  }
}
