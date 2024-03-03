import { Product } from './Product';

describe('Product domain entity', () => {
  const product = new Product({
    name: 'Xiaomi Redmi 9',
    brand: 'Xiaomi',
    model: 'Redmi 9',
    price: 10000,
    color: 'red',
  });
  it('Should be able to create a Product entity', () => {
    expect(product).toBeTruthy();
  });

  it('Should be able to return the right properties', () => {
    expect(product.id).toBeTruthy();
    expect(product.name).toBe('Xiaomi Redmi 9');
    expect(product.brand).toBe('Xiaomi');
    expect(product.model).toBe('Redmi 9');
    expect(product.price).toBe(10000);
    expect(product.color).toBe('red');
  });

  it('Should be able to update the Product entity', () => {
    product.update({
      name: 'Xiaomi Redmi 9',
      brand: 'Xiaomi',
      model: 'Redmi 9',
      price: 5000,
      color: 'white',
    });
    expect(product.price).toBe(5000);
    expect(product.color).toBe('white');
  });
});
