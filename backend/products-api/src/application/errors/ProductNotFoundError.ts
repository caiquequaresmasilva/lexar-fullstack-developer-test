import { CustomError } from './CustomError';

export class ProductNotFoundError extends CustomError {
  constructor(message = 'Product not found') {
    super(message, 404);
  }
}
