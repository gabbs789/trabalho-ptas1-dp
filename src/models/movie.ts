export type Movie = {
  id: string;
  name: string;
  species: string;
  age: number;
  vaccinated?: boolean;
  breed?: string;
};

export type MovieCreate = Omit<Movie, 'id'>;
export type MovieUpdate = Partial<Omit<Movie, 'id'>>;
