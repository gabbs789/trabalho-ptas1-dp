import { db } from '../database.service';
import { UserCreateInput, UserUpdateInput } from '../validators/user.schemas';

export const list = () => db.user.findMany();
export const getById = (id: string) => db.user.findUnique({ where: { id } });
export const create = (data: UserCreateInput) => db.user.create({ data });
export const update = (id: string, data: UserUpdateInput) => db.user.update({ where: { id }, data });
export const remove = (id: string) => db.user.delete({ where: { id } });