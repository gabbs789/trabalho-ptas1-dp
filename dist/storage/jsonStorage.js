"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureDataDir = ensureDataDir;
exports.readJSON = readJSON;
exports.writeJSON = writeJSON;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const dataDir = path_1.default.join(process.cwd(), 'data');
async function ensureDataDir() {
    try {
        await fs_1.promises.mkdir(dataDir, { recursive: true });
    }
    catch {
        // ignore
    }
}
async function readJSON(filename, defaultValue) {
    await ensureDataDir();
    const file = path_1.default.join(dataDir, filename);
    try {
        const raw = await fs_1.promises.readFile(file, 'utf-8');
        return JSON.parse(raw);
    }
    catch (e) {
        if (e.code === 'ENOENT') {
            await writeJSON(filename, defaultValue);
            return defaultValue;
        }
        throw e;
    }
}
async function writeJSON(filename, data) {
    await ensureDataDir();
    const file = path_1.default.join(dataDir, filename);
    await fs_1.promises.writeFile(file, JSON.stringify(data, null, 2), 'utf-8');
}
