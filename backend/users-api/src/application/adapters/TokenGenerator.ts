import { UserProps } from '../../domain';

export interface TokenGenerator {
  generate(payload: Omit<UserProps, 'password'>): string;
}
