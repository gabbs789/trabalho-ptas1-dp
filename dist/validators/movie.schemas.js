"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieUpdateSchema = exports.movieCreateSchema = void 0;
const zod_1 = require("zod");
exports.movieCreateSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    year: zod_1.z.number().int().min(1888).max(new Date().getFullYear() + 1),
    genre: zod_1.z.string().min(1),
    rating: zod_1.z.number().min(0).max(10).optional(),
});
exports.movieUpdateSchema = exports.movieCreateSchema.partial();
