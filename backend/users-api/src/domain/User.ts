import { generateHash } from '../helpers';
import { BaseEntity } from './BaseEntity';

export interface UserProps {
  name: string;
  email: string;
  password: string;
}

export class User extends BaseEntity<UserProps> {
  constructor(props: UserProps, id?: string) {
    super(props, id);
    if (!id){
      this.props.password = this._hashPassword(this.props.password);
    }
  }

  private _hashPassword(password: string): string {
    return generateHash(password);
  }

  public comparePassword(password: string): boolean {
    return this._hashPassword(password) === this.props.password;
  }

  public get name(): string {
    return this.props.name;
  }
  public get email(): string {
    return this.props.email;
  }

  public get password(): string {
    return this.props.password;
  }
}
