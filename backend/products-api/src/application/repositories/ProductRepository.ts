import { Product, ProductProps } from '../../domain';

interface FilterParams {
  brand?: string;
  color?: string;
  price?: [number, number];
}

export abstract class IProductRepository {
  abstract create(data: Product): Promise<void>;
  abstract update(id: string, data: Product): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract searchByName(name: string): Promise<ProductProps[]>;
  abstract filter(params: FilterParams): Promise<ProductProps[]>;
  abstract findAll(): Promise<ProductProps[]>;
}
