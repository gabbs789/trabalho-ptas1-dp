import { z } from 'zod';

export const petCreateSchema = z.object({
  name: z.string().min(1),
  species: z.string().min(1),
  age: z.number().int().min(0),
  vaccinated: z.boolean().optional(),
  breed: z.string().min(1).optional(),
});

export const petUpdateSchema = petCreateSchema.partial();

export type PetCreateInput = z.infer<typeof petCreateSchema>;
export type PetUpdateInput = z.infer<typeof petUpdateSchema>;
