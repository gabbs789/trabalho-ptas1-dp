"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = list;
exports.getById = getById;
exports.create = create;
exports.update = update;
exports.remove = remove;
const crypto_1 = require("crypto");
const jsonStorage_1 = require("../storage/jsonStorage");
const FILENAME = 'movies.json';
async function load() {
    return (0, jsonStorage_1.readJSON)(FILENAME, []);
}
async function save(movies) {
    await (0, jsonStorage_1.writeJSON)(FILENAME, movies);
}
async function list() {
    const movies = await load();
    return movies;
}
async function getById(id) {
    const movies = await load();
    return movies.find((m) => m.id === id);
}
async function create(input) {
    const movies = await load();
    const movie = { id: (0, crypto_1.randomUUID)(), ...input };
    movies.push(movie);
    await save(movies);
    return movie;
}
async function update(id, input) {
    const movies = await load();
    const idx = movies.findIndex((m) => m.id === id);
    if (idx === -1)
        return undefined;
    const updated = { ...movies[idx], ...input };
    movies[idx] = updated;
    await save(movies);
    return updated;
}
async function remove(id) {
    const movies = await load();
    const before = movies.length;
    const filtered = movies.filter((m) => m.id !== id);
    if (filtered.length === before)
        return false;
    await save(filtered);
    return true;
}
