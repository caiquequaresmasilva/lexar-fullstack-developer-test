import { Model, INTEGER, STRING } from 'sequelize';
import sequelize from '.';

class DBProduct extends Model {
  declare id: string;
  declare name: string;
  declare brand: string;
  declare model: string;
  declare price: number;
  declare color: string;
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
    brand: {
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
    color: {
      allowNull: false,
      type: STRING,
    },
  },
  {
    sequelize,
    modelName: 'products',
    timestamps: false,
  },
);

export default DBProduct;
