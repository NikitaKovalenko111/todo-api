"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const goal_model_1 = __importDefault(require("../models/goal-model"));
const dataRepository = {
    getData: (target) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(target);
        const goals = yield goal_model_1.default.find({ target: { $regex: target } }).then(el => el);
        return goals;
    }),
    getDataById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const goal = yield goal_model_1.default.findById(id).then(el => el);
        return goal;
    }),
    deleteDataById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const responseData = yield goal_model_1.default.findByIdAndRemove(id).then(el => el);
        return responseData;
    }),
    postData: (value, isCompleted) => __awaiter(void 0, void 0, void 0, function* () {
        const newData = {
            target: value,
            isCompleted: isCompleted,
            date: new Date(Date.now()),
            dateIsCompleted: undefined
        };
        const responseData = yield goal_model_1.default.create(newData);
        return responseData;
    }),
    changeDataById: (id, body) => __awaiter(void 0, void 0, void 0, function* () {
        let patchObject = {
            target: body.target,
            isCompleted: body.isCompleted,
            date: new Date(Date.now()),
            dateIsCompleted: undefined
        };
        if (body.isCompleted) {
            patchObject.dateIsCompleted = body.isCompleted ? new Date(Date.now()) : undefined;
        }
        const changedData = yield goal_model_1.default.findByIdAndUpdate(id, patchObject);
        return changedData;
    }),
};
exports.default = dataRepository;
