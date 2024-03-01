import { CustomError } from './CustomError';

export class UserAlreadyExistsError extends CustomError {
  constructor(message = 'User already exists') {
    super(message, 400);
  }
}
