"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const pets_routes_1 = __importDefault(require("./pets.routes"));
const users_routes_1 = __importDefault(require("./users.routes"));
const router = (0, express_1.Router)();
exports.router = router;
router.use('/pets', pets_routes_1.default);
router.use('/users', users_routes_1.default);
//# sourceMappingURL=index.js.map