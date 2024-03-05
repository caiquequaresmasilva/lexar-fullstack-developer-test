import { Model, Op } from 'sequelize';
import {
  FilterParams,
  IProductRepository,
} from '../../application/repositories';
import { Product, ProductProps } from '../../domain';
import DBProduct from '../database/sequelize/models/DBProduct';
import DBColor from '../database/sequelize/models/DBColor';
import DBBrand from '../database/sequelize/models/DBBrand';
import { Indexable } from '../utils';

export class SequelizeProductRepository extends IProductRepository {
  constructor(
    private readonly model = DBProduct,
    private readonly colorModel = DBColor,
    private readonly brandModel = DBBrand,
  ) {
    super();
  }

  private SEQUELIZE_PARAMS = {
    include: [
      { model: DBColor, as: 'color', attributes: { exclude: ['id'] } },
      { model: DBBrand, as: 'brand', attributes: { exclude: ['id'] } },
    ],
    attributes: { exclude: ['colorId', 'brandId'] },
  };

  private async _mapToDB(
    { id, name, brand, price, color, model }: Product,
    colorsMap: Indexable<number>,
    brandsMap: Indexable<number>,
  ) {
    return {
      id,
      name,
      brandId: brandsMap[brand],
      model,
      price,
      colorId: colorsMap[color],
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
    return new Product(
      { name, brand: brand.name, model, color: color.name, price },
      id,
    );
  }

  private _mapToProps({ id, name, brand, color, model, price }: DBProduct) {
    return {
      id,
      name,
      brand: brand.name,
      model,
      price,
      color: color.name,
    };
  }

  private _setParams({ brand, color, minPrice, maxPrice }: FilterParams) {
    let params = {};
    const priceRange = [];

    if (brand) {
      params = { ...params, '$brand.name$': brand };
    }
    if (color) {
      params = { ...params, '$color.name$': color };
    }
    if (minPrice) {
      priceRange.push({ [Op.gte]: minPrice });
    }
    if (maxPrice) {
      priceRange.push({ [Op.lte]: maxPrice });
    }
    params = { ...params, price: { [Op.and]: priceRange } };
    return params;
  }

  private async _makeMap(model: typeof DBColor | typeof DBBrand) {
    const data = await model.findAll();
    return data.reduce((acc, curr) => {
      return { ...acc, [curr.name]: curr.id };
    }, {});
  }

  async create(data: Product[]): Promise<void> {
    const colorsMap = await this._makeMap(this.colorModel);
    const brandsMap = await this._makeMap(this.brandModel);

    const toDB = await Promise.all(
      data.map(prod => this._mapToDB(prod, colorsMap, brandsMap)),
    );
    await this.model.bulkCreate(toDB);
  }

  async update(data: Product): Promise<void> {
    const colorsMap = await this._makeMap(this.colorModel);
    const brandsMap = await this._makeMap(this.brandModel);
    const { id, name, colorId, brandId, price, model } = await this._mapToDB(
      data,
      colorsMap,
      brandsMap,
    );
    await this.model.update(
      {
        name,
        brandId,
        model,
        colorId,
        price,
      },
      { where: { id } },
    );
  }

  async delete(id: string): Promise<void> {
    await this.model.destroy({ where: { id } });
  }

  async findById(id: string): Promise<Product | null> {
    const product = await this.model.findByPk(id, this.SEQUELIZE_PARAMS);
    return product ? this._mapToDomain(product) : null;
  }

  async searchByName(name: string): Promise<ProductProps[]> {
    const products = await this.model.findAll({
      where: {
        name: {
          [Op.iRegexp]: name,
        },
      },
      ...this.SEQUELIZE_PARAMS,
    });

    return products.map(this._mapToProps);
  }

  async filter(params: FilterParams): Promise<ProductProps[]> {
    const filterParams = this._setParams(params);
    const products = await this.model.findAll({
      where: filterParams,
      ...this.SEQUELIZE_PARAMS,
    });
    return products.map(this._mapToProps);
  }

  async findAll(): Promise<ProductProps[]> {
    const products = await this.model.findAll(this.SEQUELIZE_PARAMS);
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
        '$brand.name$': brand,
        model,
        '$color.name$': color,
        price,
      },
      ...this.SEQUELIZE_PARAMS,
    });

    return Boolean(product);
  }
}
