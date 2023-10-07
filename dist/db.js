"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const utils_1 = require("./utils");
require("dotenv/config");
const URL = process.env.DB_CONNECTION;
const dbConnect = () => {
    if (URL) {
        mongoose_1.default.connect(URL).then(() => {
            console.log((0, utils_1.success)('DB HAS BEEN CONNECTED SUCCESFULLY'));
        })
            .catch((err) => {
            console.log((0, utils_1.error)(`DB HASN\'T BEEN CONNECTED, ERROR: ${err}`));
        });
    }
};
exports.default = dbConnect;
