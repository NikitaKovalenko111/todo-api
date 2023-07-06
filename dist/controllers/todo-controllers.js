"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeTodoByIdController = exports.postTodoController = exports.deleteTodoByIdController = exports.getTodosByIdController = exports.getTodosController = void 0;
const todo_repository_1 = __importDefault(require("../repositories/todo-repository"));
const types_1 = require("../types");
const getTodosController = (req, res) => {
    res.json(todo_repository_1.default.getData()).sendStatus(types_1.Statuses.OK);
};
exports.getTodosController = getTodosController;
const getTodosByIdController = (req, res) => {
    const currentId = Number(req.params.id);
    const responseData = todo_repository_1.default.getDataById(currentId);
    res.json(responseData ? responseData : types_1.Statuses.NotFound).sendStatus(types_1.Statuses.OK);
};
exports.getTodosByIdController = getTodosByIdController;
const deleteTodoByIdController = (req, res) => {
    const currentId = Number(req.params.id);
    const responseData = todo_repository_1.default.deleteDataById(currentId);
    res.sendStatus(responseData != -1 ? types_1.Statuses.GoodWithoutContent : types_1.Statuses.NotFound);
};
exports.deleteTodoByIdController = deleteTodoByIdController;
const postTodoController = (req, res) => {
    const newData = todo_repository_1.default.postData(req.body.target, false);
    res.json(newData).sendStatus(types_1.Statuses.Created);
};
exports.postTodoController = postTodoController;
const changeTodoByIdController = (req, res) => {
    const currentId = Number(req.params.id);
    const currentData = todo_repository_1.default.changeDataById(currentId, req.body);
    currentData ? res.sendStatus(types_1.Statuses.OK) : types_1.Statuses.NotFound;
};
exports.changeTodoByIdController = changeTodoByIdController;
