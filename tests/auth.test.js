const request = require('supertest');
const app = require('../app');

describe('POST /api/login', () => {
  test('It should return an access token', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({
        email: 'test@example.com',
        password: 'password123',
      })
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.accessToken).toBeDefined();
  });
});
