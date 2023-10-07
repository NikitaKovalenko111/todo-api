"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeTodoByIdController = exports.postTodoController = exports.deleteTodoByIdController = exports.getTodosByIdController = exports.getTodosController = void 0;
const todo_repository_1 = __importDefault(require("../repositories/todo-repository"));
const types_1 = require("../types");
const getTodosController = (req, res) => {
    todo_repository_1.default.getData(req.query.target).then(data => {
        res.status(types_1.Statuses.OK).json(data);
    });
};
exports.getTodosController = getTodosController;
const getTodosByIdController = (req, res) => {
    const currentId = req.params.id;
    todo_repository_1.default.getDataById(currentId).then((data) => {
        res.status(types_1.Statuses.OK).json(data ? data : types_1.Statuses.NotFound);
    });
};
exports.getTodosByIdController = getTodosByIdController;
const deleteTodoByIdController = (req, res) => {
    const currentId = req.params.id;
    todo_repository_1.default.deleteDataById(currentId).then((data) => {
        res.status(types_1.Statuses.OK).json(data ? data : types_1.Statuses.NotFound);
    });
};
exports.deleteTodoByIdController = deleteTodoByIdController;
const postTodoController = (req, res) => {
    todo_repository_1.default.postData(req.body.target, false).then((data) => {
        res.status(data ? types_1.Statuses.Created : types_1.Statuses.NotFound).json(data);
    });
};
exports.postTodoController = postTodoController;
const changeTodoByIdController = (req, res) => {
    const currentId = req.params.id;
    todo_repository_1.default.changeDataById(currentId, req.body).then((data) => {
        res.status(types_1.Statuses.OK).json(data);
    });
};
exports.changeTodoByIdController = changeTodoByIdController;
