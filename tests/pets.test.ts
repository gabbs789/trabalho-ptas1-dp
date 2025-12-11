import { beforeEach, test, expect } from 'vitest';
import request from 'supertest';
import app from '../src/server';
import { promises as fs } from 'fs';
import path from 'path';

async function resetData() {
  try {
    await fs.rm(path.join(process.cwd(), 'data'), { recursive: true, force: true });
  } catch {}
}

beforeEach(async () => {
  await resetData();
});

test('health check', async () => {
  const res = await request(app).get('/health');
  expect(res.status).toBe(200);
  expect(res.body).toEqual({ status: 'ok' });
});

test('CRUD pets', async () => {
  
  const createRes = await request(app)
    .post('/api/pets')
    .send({ name: 'Luna', species: 'Dog', age: 2, vaccinated: true, breed: 'Mixed' });
  expect(createRes.status).toBe(201);
  const created = createRes.body;
  expect(created.id).toBeDefined();

<<<<<<< HEAD:tests/pets.test.ts

=======
  
>>>>>>> 2fbe4ab7c3d6eab99de98eea0debb00dc536a3bd:tests/movies.test.ts
  const listRes = await request(app).get('/api/pets');
  expect(listRes.status).toBe(200);
  expect(Array.isArray(listRes.body)).toBe(true);
  expect(listRes.body.length).toBe(1);

<<<<<<< HEAD:tests/pets.test.ts

=======
  
>>>>>>> 2fbe4ab7c3d6eab99de98eea0debb00dc536a3bd:tests/movies.test.ts
  const getRes = await request(app).get(`/api/pets/${created.id}`);
  expect(getRes.status).toBe(200);
  expect(getRes.body.name).toBe('Luna');

<<<<<<< HEAD:tests/pets.test.ts
  
=======
 
>>>>>>> 2fbe4ab7c3d6eab99de98eea0debb00dc536a3bd:tests/movies.test.ts
  const updateRes = await request(app)
    .put(`/api/pets/${created.id}`)
    .send({ age: 3, vaccinated: false });
  expect(updateRes.status).toBe(200);
  expect(updateRes.body.age).toBe(3);
  expect(updateRes.body.vaccinated).toBe(false);

<<<<<<< HEAD:tests/pets.test.ts
=======
  
>>>>>>> 2fbe4ab7c3d6eab99de98eea0debb00dc536a3bd:tests/movies.test.ts
  const delRes = await request(app).delete(`/api/pets/${created.id}`);
  expect(delRes.status).toBe(204);

  const getAfterDel = await request(app).get(`/api/pets/${created.id}`);
  expect(getAfterDel.status).toBe(404);
});
