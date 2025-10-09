import { Request, Response, NextFunction } from 'express';
import * as MoviesService from '../services/movies.service';
import { movieCreateSchema, movieUpdateSchema } from '../validators/movie.schemas';

export async function list(_req: Request, res: Response, next: NextFunction) {
  try {
    const items = await MoviesService.list();
    res.json(items);
  } catch (err) {
    next(err);
  }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const item = await MoviesService.getById(id);
    if (!item) return res.status(404).json({ error: 'Pet not found' });
    res.json(item);
  } catch (err) {
    next(err);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = movieCreateSchema.parse(req.body);
    const created = await MoviesService.create(parsed);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const parsed = movieUpdateSchema.parse(req.body);
    const updated = await MoviesService.update(id, parsed);
    if (!updated) return res.status(404).json({ error: 'Pet not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const ok = await MoviesService.remove(id);
    if (!ok) return res.status(404).json({ error: 'Pet not found' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
