import { User, UserProps } from '../../domain';
import { ITokenAdapter } from '../adapters';
import { PasswordEmailError, UserAlreadyExistsError } from '../errors';
import { UserRepository } from '../repositories';

export type Token = {
  token: string;
};

export class UserService {
  constructor(
    private readonly repo: UserRepository,
    private readonly token: ITokenAdapter,
  ) {}

  private _makeResponse(name: string, email: string): Token {
    return {
      token: this.token.generate({ name, email }),
    };
  }

  async create({ name, email, password }: UserProps): Promise<Token> {
    let user = await this.repo.findByEmail(email);
    if (user) {
      throw new UserAlreadyExistsError();
    }
    const toCreate = new User({
      name,
      email,
      password,
    });
    await this.repo.create(toCreate);
    return this._makeResponse(name, email);
  }

  async signIn({ email, password }: Omit<UserProps, 'name'>): Promise<Token> {
    const user = await this.repo.findByEmail(email);
    if (!user || !user.comparePassword(password)) {
      throw new PasswordEmailError();
    }
    return this._makeResponse(user.name, email);
  }
}
