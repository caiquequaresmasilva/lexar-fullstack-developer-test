import { Model, STRING } from 'sequelize';
import sequelize from '.';

class DBUser extends Model {
  declare id: string;
  declare name: string;
  declare email: string;
  declare password: string;
}

DBUser.init(
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
    email: {
      allowNull: false,
      type: STRING,
    },
    password: {
      allowNull: false,
      type: STRING,
    },
  },
  {
    sequelize,
    modelName: 'users',
    timestamps: false,
  },
);

export default DBUser;
