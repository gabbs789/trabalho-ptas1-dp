import { randomUUID } from 'crypto';
import { Movie, MovieCreate, MovieUpdate } from '../models/movie';
import { readJSON, writeJSON } from '../storage/jsonStorage';

const FILENAME = 'pets.json';

async function load(): Promise<Movie[]> {
  return readJSON<Movie[]>(FILENAME, []);
}

async function save(movies: Movie[]): Promise<void> {
  await writeJSON(FILENAME, movies);
}

export async function list(): Promise<Movie[]> {
  const movies = await load();
  return movies;
}

export async function getById(id: string): Promise<Movie | undefined> {
  const movies = await load();
  return movies.find((m) => m.id === id);
}

export async function create(input: MovieCreate): Promise<Movie> {
  const movies = await load();
  const movie: Movie = { id: randomUUID(), ...input };
  movies.push(movie);
  await save(movies);
  return movie;
}

export async function update(id: string, input: MovieUpdate): Promise<Movie | undefined> {
  const movies = await load();
  const idx = movies.findIndex((m) => m.id === id);
  if (idx === -1) return undefined;
  const updated: Movie = { ...movies[idx], ...input };
  movies[idx] = updated;
  await save(movies);
  return updated;
}

export async function remove(id: string): Promise<boolean> {
  const movies = await load();
  const before = movies.length;
  const filtered = movies.filter((m) => m.id !== id);
  if (filtered.length === before) return false;
  await save(filtered);
  return true;
}
