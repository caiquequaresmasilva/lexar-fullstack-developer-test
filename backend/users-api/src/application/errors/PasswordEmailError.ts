export class PasswordEmailError extends Error {
  public status: string;
  constructor(message = 'Email or password incorrect') {
    super(message);
    this.status = '400';
  }
}
