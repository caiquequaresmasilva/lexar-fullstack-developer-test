type FilterParams = {
  name?: string;
  brand?: string;
  color?: string;
  minPrice?: string;
  maxPrice?: string;
};
export function makeFilterUrl({
  name,
  brand,
  color,
  minPrice,
  maxPrice,
}: FilterParams): string {
  return `product/filter?name=${name}&brand=${brand}&color=${color}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
}
