import { Model, INTEGER, STRING } from 'sequelize';
import sequelize from '.';
import DBColor from './DBColor';
import DBBrand from './DBBrand';

type Name = { name: string };
class DBProduct extends Model {
  declare id: string;
  declare name: string;
  declare model: string;
  declare price: number;
  declare brand: Name;
  declare color: Name;
}

DBProduct.init(
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: STRING,
    },
    name: {
      allowNull: false,
      type: STRING,
    },
    model: {
      allowNull: false,
      type: STRING,
    },
    price: {
      allowNull: false,
      type: INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'product',
    timestamps: false,
  },
);

// Associação dos produtos com as cores
DBColor.hasMany(DBProduct, {
  foreignKey: 'colorId',
  onUpdate: 'CASCADE',
  onDelete: 'NO ACTION',
});
DBProduct.belongsTo(DBColor, { foreignKey: 'colorId', as: 'color' });

// Associação dos produtos com as marcas
DBBrand.hasMany(DBProduct, {
  foreignKey: 'brandId',
  onUpdate: 'CASCADE',
  onDelete: 'NO ACTION',
});

DBProduct.belongsTo(DBBrand, { foreignKey: 'brandId', as: 'brand' });

export default DBProduct;
