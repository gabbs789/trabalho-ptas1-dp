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

  const listRes = await request(app).get('/api/pets');
  expect(listRes.status).toBe(200);
  expect(Array.isArray(listRes.body)).toBe(true);
  expect(listRes.body.length).toBe(1);
