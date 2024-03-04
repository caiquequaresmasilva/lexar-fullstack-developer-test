import { Op } from 'sequelize';
import {
  FilterParams,
  IProductRepository,
} from '../../application/repositories';
import { Product, ProductProps } from '../../domain';
import DBProduct from '../database/sequelize/models/DBProduct';

export class SequelizeProductRepository extends IProductRepository {
  constructor(private readonly model = DBProduct) {
    super();
  }

  private async _mapToDB({ id, name, brand, price, color, model }: Product) {
    return {
      id,
      name,
      brand,
      model,
      price,
      color,
    };
  }

  private async _mapToDomain({
    id,
    name,
    brand,
    color,
    price,
    model,
  }: DBProduct): Promise<Product> {
    return new Product({ name, brand, model, color, price }, id);
  }

  private _mapToProps({ id, name, brand, color, model, price }: DBProduct) {
    return {
      id,
      name,
      brand,
      model,
      price,
      color,
    };
  }

  private _setParams({ brand, color, price }: FilterParams) {
    let params = {};
    if (brand) {
      params = { ...params, brand };
    }
    if (color) {
      params = { ...params, color };
    }
    if (price) {
      const priceParam = {
        [Op.between]: price,
      };
      params = { ...params, price: priceParam };
    }
    return params;
  }
  async create(data: Product[]): Promise<void> {
    const toDB = await Promise.all(data.map(this._mapToDB));
    await this.model.bulkCreate(toDB);
  }

  async update(data: Product): Promise<void> {
    const { id, name, color, brand, price } = await this._mapToDB(data);
    await this.model.update(
      {
        name,
        brand,
        color,
        price,
      },
      { where: { id } },
    );
  }

  async delete(id: string): Promise<void> {
    await this.model.destroy({ where: { id } });
  }

  async findById(id: string): Promise<Product | null> {
    const product = await this.model.findByPk(id);
    return product ? this._mapToDomain(product) : null;
  }

  async searchByName(name: string): Promise<ProductProps[]> {
    const products = await this.model.findAll({
      where: {
        name: {
          [Op.iRegexp]: name,
        },
      },
    });

    return products.map(this._mapToProps);
  }

  async filter(params: FilterParams): Promise<ProductProps[]> {
    const filterParams = this._setParams(params);
    const products = await this.model.findAll({
      where: filterParams,
    });
    return products.map(this._mapToProps);
  }

  async findAll(): Promise<ProductProps[]> {
    const products = await this.model.findAll();
    return products.map(this._mapToProps);
  }

  async exists({
    name,
    brand,
    model,
    price,
    color,
  }: ProductProps): Promise<boolean> {
    const product = await this.model.findOne({
      where: {
        name,
        brand,
        model,
        color,
        price,
      },
    });

    return Boolean(product);
  }
}
