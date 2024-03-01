export class UserAlreadyExistsError extends Error {
  public status: string;
  constructor(message = 'User already exists') {
    super(message);
    this.status = '400';
  }
}
