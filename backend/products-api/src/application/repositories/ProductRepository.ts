import { Product, ProductProps } from '../../domain';

export interface FilterParams {
  brand?: string;
  color?: string;
  maxPrice?: number;
  minPrice?: number;
}

export abstract class IProductRepository {
  abstract create(data: Product[]): Promise<void>;
  abstract update(data: Product): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findById(id: string): Promise<Product | null>;
  abstract searchByName(name: string): Promise<ProductProps[]>;
  abstract filter(params: FilterParams): Promise<ProductProps[]>;
  abstract findAll(): Promise<ProductProps[]>;
  abstract exists(data: ProductProps): Promise<boolean>;
}
