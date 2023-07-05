"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeTodoByIdController = exports.postTodoController = exports.deleteTodoByIdController = exports.getTodosByIdController = exports.getTodosController = void 0;
const todo_repository_1 = __importDefault(require("../repositories/todo-repository"));
const types_1 = require("../types");
const getTodosController = (req, res) => {
    res.send(todo_repository_1.default.getData());
};
exports.getTodosController = getTodosController;
const getTodosByIdController = (req, res) => {
    const currentId = Number(req.params.id);
    const responseData = todo_repository_1.default.getDataById(currentId);
    res.send(responseData ? responseData : types_1.Statuses.NotFound);
};
exports.getTodosByIdController = getTodosByIdController;
const deleteTodoByIdController = (req, res) => {
    const currentId = Number(req.params.id);
    const responseData = todo_repository_1.default.deleteDataById(currentId);
    res.sendStatus(responseData != -1 ? types_1.Statuses.GoodWithoutContent : types_1.Statuses.NotFound);
};
exports.deleteTodoByIdController = deleteTodoByIdController;
const postTodoController = (req, res) => {
    const newData = todo_repository_1.default.postData(req.body.value, false);
    res.status(types_1.Statuses.Created).send(newData);
};
exports.postTodoController = postTodoController;
const changeTodoByIdController = (req, res) => {
    const currentId = Number(req.params.id);
    const currentData = todo_repository_1.default.changeDataById(currentId, req.body);
    currentData ? res.send(types_1.Statuses.OK) : types_1.Statuses.NotFound;
};
exports.changeTodoByIdController = changeTodoByIdController;
