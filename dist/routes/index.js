"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const movies_routes_1 = __importDefault(require("./movies.routes"));
const router = (0, express_1.Router)();
exports.router = router;
router.use('/movies', movies_routes_1.default);
