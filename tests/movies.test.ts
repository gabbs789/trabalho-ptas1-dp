import { beforeEach, test, expect } from 'vitest';
import request from 'supertest';
import app from '../src/server';
import { promises as fs } from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'movies.json');

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

test('CRUD movies', async () => {
  // Create
  const createRes = await request(app)
    .post('/api/movies')
    .send({ title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 9 });
  expect(createRes.status).toBe(201);
  const created = createRes.body;
  expect(created.id).toBeDefined();

  // List
  const listRes = await request(app).get('/api/movies');
  expect(listRes.status).toBe(200);
  expect(Array.isArray(listRes.body)).toBe(true);
  expect(listRes.body.length).toBe(1);

  // Get by id
  const getRes = await request(app).get(`/api/movies/${created.id}`);
  expect(getRes.status).toBe(200);
  expect(getRes.body.title).toBe('Inception');

  // Update
  const updateRes = await request(app)
    .put(`/api/movies/${created.id}`)
    .send({ rating: 8.5 });
  expect(updateRes.status).toBe(200);
  expect(updateRes.body.rating).toBe(8.5);

  // Delete
  const delRes = await request(app).delete(`/api/movies/${created.id}`);
  expect(delRes.status).toBe(204);

  const getAfterDel = await request(app).get(`/api/movies/${created.id}`);
  expect(getAfterDel.status).toBe(404);
});
