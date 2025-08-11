const userService = require('../src/services/userService');

jest.mock('../src/repositories/userRepository', () => ({
  getAllUsers: jest.fn(),
}));

const userRepository = require('../src/repositories/userRepository');

describe('userService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('tiene que devolver todos los usuarios', async () => {
    const fakeUsers = [
      { id: 1, name: "Admin", email: "admin@spsgroup.com.br", type: "admin", password: "1234" }
    ];
    userRepository.getAllUsers.mockResolvedValue(fakeUsers);

    const result = await userService.getAllUsers();

    expect(result).toEqual(fakeUsers);
    expect(userRepository.getAllUsers).toHaveBeenCalledTimes(1);
  });
});
