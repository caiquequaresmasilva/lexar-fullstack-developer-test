import { CustomError } from './CustomError';

export class PasswordEmailError extends CustomError {
  constructor(message = 'Password or email incorrect') {
    super(message, 400);
  }
}
