"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_router_1 = require("./routes/todo-router");
const types_1 = require("./types");
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
const port = process.env.PORT || 3000;
const parseJsonMiddleware = express_1.default.json();
const parseUrlMiddleware = express_1.default.urlencoded({ extended: true });
server.use((0, cors_1.default)());
server.use(parseJsonMiddleware);
server.use(parseUrlMiddleware);
server.use('/todos', todo_router_1.todoRouter);
server.get('/', (req, res) => {
    res.send(types_1.Statuses.NotFound);
});
server.listen(port, () => {
    console.log(`The server has been started on the port: ${port}`);
});
