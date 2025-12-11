export type User = {
  id: string;
  name: string;
  species: string;
  age: number;
  vaccinated?: boolean;
  breed?: string;
};

export type UserCreate = Omit<User, 'id'>;
export type UserUpdate = Partial<Omit<User, 'id'>>;
