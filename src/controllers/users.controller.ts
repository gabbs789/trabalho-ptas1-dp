import { Request, Response, NextFunction } from 'express';
import * as UsersService from '../services/users.service';
import { userCreateSchema, userUpdateSchema } from '../validators/user.schemas';

export async function list(_req: Request, res: Response, next: NextFunction) {
  try {
    const items = await UsersService.list();
    res.json(items);
  } catch (err) {
    next(err);
  }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const item = await UsersService.getById(id);
    if (!item) return res.status(404).json({ error: 'User not found' });
    res.json(item);
  } catch (err) {
    next(err);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = userCreateSchema.parse(req.body);
    const created = await UsersService.create(parsed);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const parsed = userUpdateSchema.parse(req.body);
    const updated = await UsersService.update(id, parsed);
    if (!updated) return res.status(404).json({ error: 'User not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const ok = await UsersService.remove(id);
    if (!ok) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
