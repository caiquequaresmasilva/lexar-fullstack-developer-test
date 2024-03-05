export type Color = {
  id: number;
  name: string;
};

export abstract class IColorRepository {
  abstract findAll(): Promise<Color[]>;
}
