import { randomUUID } from 'crypto';
import { Pet, PetCreate, PetUpdate } from '../models/pet';
import { readJSON, writeJSON } from '../storage/jsonStorage';

const FILENAME = 'pets.json';

async function load(): Promise<Pet[]> {
  return readJSON<Pet[]>(FILENAME, []);
}

async function save(items: Pet[]): Promise<void> {
  await writeJSON(FILENAME, items);
}

export async function list(): Promise<Pet[]> {
  const items = await load();
  return items;
}

export async function getById(id: string): Promise<Pet | undefined> {
  const items = await load();
  return items.find((m) => m.id === id);
}

export async function create(input: PetCreate): Promise<Pet> {
  const items = await load();
  const item: Pet = { id: randomUUID(), ...input };
  items.push(item);
  await save(items);
  return item;
}

export async function update(id: string, input: PetUpdate): Promise<Pet | undefined> {
  const items = await load();
  const idx = items.findIndex((m) => m.id === id);
  if (idx === -1) return undefined;
  const updated: Pet = { ...items[idx], ...input };
  items[idx] = updated;
  await save(items);
  return updated;
}

export async function remove(id: string): Promise<boolean> {
  const items = await load();
  const before = items.length;
  const filtered = items.filter((m) => m.id !== id);
  if (filtered.length === before) return false;
  await save(filtered);
  return true;
}
