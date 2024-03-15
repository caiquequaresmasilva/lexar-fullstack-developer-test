import { User, UserProps } from '../../domain';
import { TokenGenerator } from '../adapters';
import { CustomError } from '../errors';
import { UserRepository } from '../repositories';

export type Token = {
  token: string;
};

export class UserService {
  constructor(
    private readonly repo: UserRepository,
    private readonly token: TokenGenerator,
  ) {}

  private userAlreadyExistsError = new CustomError('User already exists', 400);
  private passwordEmailError = new CustomError(
    'Password or email incorrect',
    400,
  );

  private _makeResponse(name: string, email: string): Token {
    return {
      token: this.token.generate({ name, email }),
    };
  }

  async create({ name, email, password }: UserProps): Promise<Token> {
    let user = await this.repo.findByEmail(email);
    if (user) {
      throw this.userAlreadyExistsError
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
      throw this.passwordEmailError
    }
    return this._makeResponse(user.name, email);
  }
}
