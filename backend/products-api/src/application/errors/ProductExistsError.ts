import { CustomError } from './CustomError';

export class ProductExistsError extends CustomError {
  constructor(message = 'Product already created') {
    super(message, 400);
  }
}
