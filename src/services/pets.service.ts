import { db } from '../database.service';
import { PetCreateInput } from '../validators/pet.schemas';

export const list = () => db.pet.findMany();
export const getById = (id: string) => db.pet.findUnique({ where: { id } });
export const create = (data: PetCreateInput) => db.pet.create({ data });
export const update = (id: string, data: any) => db.pet.update({ where: { id }, data });
export const remove = (id: string) => db.pet.delete({ where: { id } });