const request = require('supertest');
const app = require('../src/app'); // Make sure to export the app from app.js

describe('School API', () => {
  it('should add a new school', async () => {
    const res = await request(app)
      .post('/api/addSchool')
      .send({
        name: "Test Names",
        address: "Bhartiya Test St",
        latitude: 69.7128,
        longitude: -74.0060
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should list schools', async () => {
    const res = await request(app)
      .get('/api/listSchools')
      .query({ latitude: 40.69, longitude: -54.420 });
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});