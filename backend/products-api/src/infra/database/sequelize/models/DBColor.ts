import { INTEGER, Model, STRING } from 'sequelize';
import sequelize from '.';

class DBColor extends Model {
  declare id: number;
  declare name: string;
}

DBColor.init(
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
    modelName: 'color',
    timestamps: false,
  },
);

export default DBColor;
