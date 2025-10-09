export type Movie = {
  id: string;
  title: string;
  year: number;
  genre: string;
  rating?: number; // 0-10
};

export type MovieCreate = Omit<Movie, 'id'>;
export type MovieUpdate = Partial<Omit<Movie, 'id'>>;
