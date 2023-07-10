"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_router_1 = require("./routes/todo-router");
const types_1 = require("./types");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const utils_1 = require("./utils");
const chalk_1 = __importDefault(require("chalk"));
const server = (0, express_1.default)();
const port = process.env.PORT || 3000;
const parseJsonMiddleware = express_1.default.json();
const parseUrlMiddleware = express_1.default.urlencoded({ extended: true });
server.use((0, cors_1.default)());
server.use((0, morgan_1.default)(function (tokens, req, res) {
    return chalk_1.default.cyan.bold(`METHOD: ${tokens.method(req, res)} | URL: ${tokens.url(req, res)} - ${tokens['response-time'](req, res)} ms | STATUS: ${tokens.status(req, res)} | IP: ${tokens['remote-addr'](req, res)} | DATE: ${tokens.date(req, res)}`);
}));
server.use(parseJsonMiddleware);
server.use(parseUrlMiddleware);
server.use('/todos', todo_router_1.todoRouter);
server.get('/', (req, res) => {
    res.sendStatus(types_1.Statuses.NotFound);
});
server.listen(port, () => {
    console.log((0, utils_1.success)(`THE SERVER HAS BEEN STARTED ON PORT: ${port}`));
});
