import { z } from 'zod';

export const movieCreateSchema = z.object({
  title: z.string().min(1),
  year: z.number().int().min(1888).max(new Date().getFullYear() + 1),
  genre: z.string().min(1),
  rating: z.number().min(0).max(10).optional(),
});

export const movieUpdateSchema = movieCreateSchema.partial();

export type MovieCreateInput = z.infer<typeof movieCreateSchema>;
export type MovieUpdateInput = z.infer<typeof movieUpdateSchema>;
