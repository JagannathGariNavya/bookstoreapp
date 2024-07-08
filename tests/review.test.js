const request = require('supertest');
const app = require('../app');

describe('POST /api/reviews', () => {
  test('It should create a new review', async () => {
    const newReview = {
      bookId: 'book_id_here',
      customerId: 'customer_id_here',
      rating: 5,
      comment: 'This book was great!',
    };

    const response = await request(app)
      .post('/api/reviews')
      .send(newReview)
      .set('Authorization', 'Bearer your_access_token')
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body.bookId).toBe(newReview.bookId);
    expect(response.body.customerId).toBe(newReview.customerId);
    expect(response.body.rating).toBe(newReview.rating);
    expect(response.body.comment).toBe(newReview.comment);
  });
});
