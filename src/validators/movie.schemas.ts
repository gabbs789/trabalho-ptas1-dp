import { z } from 'zod';

export const movieCreateSchema = z.object({
  name: z.string().min(1),
  species: z.string().min(1),
  age: z.number().int().min(0),
  vaccinated: z.boolean().optional(),
  breed: z.string().min(1).optional(),
});

export const movieUpdateSchema = movieCreateSchema.partial();

export type MovieCreateInput = z.infer<typeof movieCreateSchema>;
export type MovieUpdateInput = z.infer<typeof movieUpdateSchema>;
