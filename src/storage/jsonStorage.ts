import { promises as fs } from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export async function ensureDataDir() {
  try {
    await fs.mkdir(dataDir, { recursive: true });
  } catch {
    
  }
}

export async function readJSON<T>(filename: string, defaultValue: T): Promise<T> {
  await ensureDataDir();
  const file = path.join(dataDir, filename);
  try {
    const raw = await fs.readFile(file, 'utf-8');
    return JSON.parse(raw) as T;
  } catch (e: any) {
    if (e.code === 'ENOENT') {
      await writeJSON(filename, defaultValue);
      return defaultValue;
    }
    throw e;
  }
}

export async function writeJSON<T>(filename: string, data: T): Promise<void> {
  await ensureDataDir();
  const file = path.join(dataDir, filename);
  await fs.writeFile(file, JSON.stringify(data, null, 2), 'utf-8');
}
