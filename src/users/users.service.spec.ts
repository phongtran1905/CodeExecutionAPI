import { Test } from '@nestjs/testing';
import { UsersService } from '@users/users.service';
import { JwtModule } from '@nestjs/jwt';

describe('UsersService Integration', () => {
  let userService: UsersService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: 'secret',
          signOptions: { expiresIn: '1d' },
        }),
      ],
      providers: [UsersService],
    }).compile();

    userService = module.get<UsersService>(UsersService);
  });

  describe('login', () => {
    it('should return login result', async () => {
      const result = await userService.login({ username: 'testuser', id: 1 });
      expect(result.accessToken).toBeDefined();
    });
  });
});
