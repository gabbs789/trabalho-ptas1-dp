"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.petUpdateSchema = exports.petCreateSchema = void 0;
const zod_1 = require("zod");
exports.petCreateSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    species: zod_1.z.string().min(1),
    age: zod_1.z.number().int().min(0),
    vaccinated: zod_1.z.boolean().optional(),
    breed: zod_1.z.string().min(1).optional(),
});
exports.petUpdateSchema = exports.petCreateSchema.partial();
//# sourceMappingURL=pet.schemas.js.map