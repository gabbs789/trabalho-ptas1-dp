"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = list;
exports.getById = getById;
exports.create = create;
exports.update = update;
exports.remove = remove;
const PetsService = __importStar(require("../services/pets.service"));
const pet_schemas_1 = require("../validators/pet.schemas");
async function list(_req, res, next) {
    try {
        const items = await PetsService.list();
        res.json(items);
    }
    catch (err) {
        next(err);
    }
}
async function getById(req, res, next) {
    try {
        const id = req.params.id;
        const item = await PetsService.getById(id);
        if (!item)
            return res.status(404).json({ error: 'Pet not found' });
        res.json(item);
    }
    catch (err) {
        next(err);
    }
}
async function create(req, res, next) {
    try {
        const parsed = pet_schemas_1.petCreateSchema.parse(req.body);
        const created = await PetsService.create(parsed);
        res.status(201).json(created);
    }
    catch (err) {
        next(err);
    }
}
async function update(req, res, next) {
    try {
        const id = req.params.id;
        const parsed = pet_schemas_1.petUpdateSchema.parse(req.body);
        const updated = await PetsService.update(id, parsed);
        if (!updated)
            return res.status(404).json({ error: 'Pet not found' });
        res.json(updated);
    }
    catch (err) {
        next(err);
    }
}
async function remove(req, res, next) {
    try {
        const id = req.params.id;
        const ok = await PetsService.remove(id);
        if (!ok)
            return res.status(404).json({ error: 'Pet not found' });
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=pets.controller.js.map