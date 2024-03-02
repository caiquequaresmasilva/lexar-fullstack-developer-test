import { User } from './User';

describe('User domain entity', () => {
  const user = new User({
    name: 'TEST USER',
    email: 'test.email@test.com',
    password: 'TESTpassword42',
  });
  it('Should be able to create an User entity', () => {
    expect(user).toBeTruthy();
  });

  it('Should be able to return the right properties', () => {
    expect(user.id).toBeTruthy();
    expect(user.name).toBe('TEST USER');
    expect(user.email).toBe('test.email@test.com');
  });

  it('Should be able to check the password', () => {
    expect(user.comparePassword('TESTpassword42')).toBeTruthy();
    expect(user.comparePassword('WRONGpassword')).toBeFalsy();
  });
});
