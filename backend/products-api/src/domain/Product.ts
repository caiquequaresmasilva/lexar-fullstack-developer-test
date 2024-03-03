import { BaseEntity } from './BaseEntity';

export interface ProductProps {
  name: string;
  brand: string;
  model: string;
  price: number;
  color: string;
}

export class Product extends BaseEntity<ProductProps> {
  public update(data: ProductProps): void {
    this.props = { ...data };
  }
  public get name(): string {
    return this.props.name;
  }

  public get brand(): string {
    return this.props.brand;
  }

  public get model(): string {
    return this.props.model;
  }

  public get price(): number {
    return this.props.price;
  }

  public get color(): string {
    return this.props.color;
  }
}
