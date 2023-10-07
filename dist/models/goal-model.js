"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.goalSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.goalSchema = new Schema({
    target: {
        type: String,
        require: true
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        require: true
    },
    dateIsCompleted: {
        type: Date
    },
});
const Goal = mongoose_1.default.model('Goal', exports.goalSchema);
exports.default = Goal;
