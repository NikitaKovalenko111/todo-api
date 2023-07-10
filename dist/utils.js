"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.success = exports.error = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.error = chalk_1.default.bgRed.bold;
exports.success = chalk_1.default.bgGreen.bold;
exports.log = chalk_1.default.bgCyan.bold;
