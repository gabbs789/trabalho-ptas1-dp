import { db } from '../datdabase.service';

export type PetCreate = {
  name: string;
  species: string;
  age: number;
  vaccinated?: boolean;
  breed?: string;
};

export type PetUpdate = Partial<PetCreate>;

export async function list() {
  return db.pet.findMany();
}

export async function getById(id: string) {
  return db.pet.findUnique({
    where: { id },
  });
}

export async function create(input: PetCreate) {
  return db.pet.create({
    data: input,
  });
}

export async function update(id: string, input: PetUpdate) {
  return db.pet.update({
    where: { id },
    data: input,
  });
}

export async function remove(id: string) {
  await db.pet.delete({
    where: { id },
  });
  return true;
}
