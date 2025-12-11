import { randomUUID } from 'crypto';
import { User, UserCreate, UserUpdate } from '../models/user';
import { readJSON, writeJSON } from '../storage/jsonStorage';

const FILENAME = 'users.json';

async function load(): Promise<User[]> {
  return readJSON<User[]>(FILENAME, []);
}

async function save(users: User[]): Promise<void> {
  await writeJSON(FILENAME, users);
}

export async function list(): Promise<User[]> {
  const users = await load();
  return users;
}

export async function getById(id: string): Promise<User | undefined> {
  const users = await load();
  return users.find((m) => m.id === id);
}

export async function create(input: UserCreate): Promise<User> {
  const users = await load();
  const user: User = { id: randomUUID(), ...input };
  users.push(user);
  await save(users);
  return user;
}

export async function update(id: string, input: UserUpdate): Promise<User | undefined> {
  const users = await load();
  const idx = users.findIndex((m) => m.id === id);
  if (idx === -1) return undefined;
  const updated: User = { ...users[idx], ...input };
  users[idx] = updated;
  await save(users);
  return updated;
}

export async function remove(id: string): Promise<boolean> {
  const users = await load();
  const before = users.length;
  const filtered = users.filter((m) => m.id !== id);
  if (filtered.length === before) return false;
  await save(filtered);
  return true;
}
