"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todo_router_1 = require("./routes/todo-router");
const types_1 = require("./types");
const server = (0, express_1.default)();
const port = process.env.PORT || 3000;
const parseMiddleware = (0, body_parser_1.default)({});
server.use(parseMiddleware);
server.use('/todos', todo_router_1.todoRouter);
server.get('/', (req, res) => {
    res.send(types_1.Statuses.NotFound);
});
server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
