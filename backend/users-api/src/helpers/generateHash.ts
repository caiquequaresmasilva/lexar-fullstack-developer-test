import { createHash } from 'node:crypto';

export function generateHash(string: string) {
  return createHash('md5').update(string).digest('hex');
}
