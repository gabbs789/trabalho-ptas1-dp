import { z } from 'zod';

export const userCreateSchema = z.object({
  name: z.string().min(1),
  species: z.string().min(1),
  age: z.number().int().min(0),
  vaccinated: z.boolean().optional(),
  breed: z.string().min(1).optional(),
});

export const userUpdateSchema = userCreateSchema.partial();

export type UserCreateInput = z.infer<typeof userCreateSchema>;
export type UserUpdateInput = z.infer<typeof userUpdateSchema>;
