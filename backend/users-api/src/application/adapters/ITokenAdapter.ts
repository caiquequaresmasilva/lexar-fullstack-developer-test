import { UserProps } from '../../domain';

export abstract class ITokenAdapter {
  abstract generate(payload: Omit<UserProps, 'password'>): string;
}
