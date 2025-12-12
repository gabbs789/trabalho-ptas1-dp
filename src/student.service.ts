import { db } from './database.service';

// Assuming there will be a Student model in the database
export const listStudents = () => {
  return db.student?.findMany() || Promise.resolve([]);
};

export const getStudentById = (id: string) => {
  return db.student?.findUnique({ where: { id } }) || Promise.resolve(null);
};

export const createStudent = (data: any) => {
  return db.student?.create({ data }) || Promise.resolve(null);
};

export const updateStudent = (id: string, data: any) => {
  return db.student?.update({ where: { id }, data }) || Promise.resolve(null);
};

export const removeStudent = (id: string) => {
  return db.student?.delete({ where: { id } }) || Promise.resolve(null);
};