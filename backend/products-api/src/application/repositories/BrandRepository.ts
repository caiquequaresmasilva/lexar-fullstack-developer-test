export type Brand = {
  id: number;
  name: string;
};

export abstract class IBrandRepository {
  abstract findAll(): Promise<Brand[]>;
}
