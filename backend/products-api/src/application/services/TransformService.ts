import { ProductProps } from '../../domain';

export type Details = {
  brand?: string;
  model?: string;
  color?: string;
};

export type DataInfo = {
  price?: number;
  color?: string;
};

export type Type1 = {
  name?: string;
  brand?: string;
  model?: string;
  price?: number;
  color?: string;
};

export type Type2 = {
  name?: string;
  details?: Details;
  price?: number;
};

export type Type3 = {
  name?: string;
  brand?: string;
  model?: string;
  data?: DataInfo[];
};

export type RawProduct = Type1 | Type2 | Type3[];

export class TransformService {
  private _transformType3(rawProduct: Type3[]) {
    const products: Partial<ProductProps>[] = [];
    for (const prod of rawProduct) {
      if (prod.data) {
        prod.data.forEach(({ price, color }) =>
          products.push({
            name: prod.name,
            brand: prod.brand,
            model: prod.model,
            price,
            color,
          }),
        );
      } else {
        products.push({
          name: prod.name,
          brand: prod.brand,
          model: prod.model,
        });
      }
    }
    return products;
  }

  private _transformType2({
    name,
    details,
    price,
  }: Type2): Partial<ProductProps> {
    return {
      name,
      brand: details?.brand,
      model: details?.model,
      color: details?.color,
      price,
    };
  }
  public async transform(rawProduct: RawProduct) {
    if (Array.isArray(rawProduct)) {
      return this._transformType3(rawProduct);
    }
    if ((<Type2>rawProduct).details) {
      return this._transformType2(rawProduct);
    }
    return rawProduct as Partial<ProductProps>;
  }
}
