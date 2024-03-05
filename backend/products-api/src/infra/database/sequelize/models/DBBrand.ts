import { INTEGER, Model, STRING } from 'sequelize';
import sequelize from '.';

class DBBrand extends Model {
  declare id: number;
  declare name: string;
}

DBBrand.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: INTEGER,
    },
    name: {
      allowNull: false,
      type: STRING,
    },
  },
  {
    sequelize,
    modelName: 'brand',
    timestamps: false,
  },
);

export default DBBrand;
