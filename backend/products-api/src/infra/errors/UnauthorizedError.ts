import { CustomError } from "../../application/errors";

export class UnauthorizedError extends CustomError{
  constructor(message = 'Invalid authentication token') {
    super(message, 401);
  }
}