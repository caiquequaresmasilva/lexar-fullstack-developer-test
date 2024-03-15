import { makeInMemoryUserService } from '../../../test/factories';

describe('UserService', () => {
  const userService = makeInMemoryUserService();
  const mockedUser = {
    name: 'Test User',
    email: 'test@email.com',
    password: 'password',
  };
  describe('# create', () => {
    it('Should create a new user and return the token info', async () => {
      const token = await userService.create(mockedUser);
      expect(token.token).toBe(mockedUser.name + mockedUser.email);
    });

    it('Should not be able to create an user that already exists', async () => {
      expect(() => userService.create(mockedUser)).rejects.toThrow(
        'User already exists',
      );
    });
  });

  describe('# signIn', () => {
    it('Should sing in an user and return the token', async () => {
      const token = await userService.signIn({
        password: mockedUser.password,
        email: mockedUser.email,
      });
      expect(token.token).toBe(mockedUser.name + mockedUser.email);
    });

    it('Should not be able to sign in with incorrect credentials', async () => {
      expect(() =>
        userService.signIn({
          password: mockedUser.password,
          email: 'WRONGemail',
        }),
      ).rejects.toThrow('Password or email incorrect');

      expect(() =>
      userService.signIn({
        password: "notThePassword",
        email: mockedUser.email,
      }),
    ).rejects.toThrow('Password or email incorrect');
    });
  });
});
