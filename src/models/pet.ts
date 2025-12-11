export type Pet = {
  id: string;
  name: string;
  species: string;
  age: number;
  vaccinated?: boolean;
  breed?: string;
};

export type PetCreate = Omit<Pet, 'id'>;
export type PetUpdate = Partial<Omit<Pet, 'id'>>;
