export function makeFilterUrl({
  name,
  brand,
  color,
  minPrice,
  maxPrice,
}: Partial<FilterParams>): string {
  return `product/filter?name=${name}&brand=${brand}&color=${color}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
}
