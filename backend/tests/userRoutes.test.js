

const request = require('supertest');
const app = require('../src/app');

describe('GET /users', () => {
  it('debe devolver 401 si no está autenticado', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(401);
  });
});