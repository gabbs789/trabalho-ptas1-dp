import { db } from '../datdabase.service';

export type UserCreate = {
  name: string;
  email: string;
};

export type UserUpdate = Partial<UserCreate>;

export async function list() {
  return db.user.findMany();
}

export async function getById(id: string) {
  return db.user.findUnique({
    where: { id },
  });
}

export async function create(input: UserCreate) {
  return db.user.create({
    data: input,
  });
}

export async function update(id: string, input: UserUpdate) {
  return db.user.update({
    where: { id },
    data: input,
  });
}

export async function remove(id: string) {
  await db.user.delete({
    where: { id },
  });
  return true;
}
