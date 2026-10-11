const request = require('supertest');
const app = require('./app');

describe('Express API Testing', () => {

  // Tes GET Request
  it('GET /api/users - Harus mengembalikan status 200 dan daftar user', async () => {
    const response = await request(app).get('/api/users');
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([{ id: 1, name: 'Budi' }]);
  });x

  // Tes POST Request Berhasil
  it('POST /api/users - Harus membuat user baru (Status 201)', async () => {
    const newUser = { name: 'Siti' };

    const response = await request(app)
      .post('/api/users')
      .send(newUser);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Siti');
  });

  // Tes POST Request Validasi Gagal
  it('POST /api/users - Harus gagal jika nama kosong (Status 400)', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({});

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error', 'Nama wajib diisi');
  });

});