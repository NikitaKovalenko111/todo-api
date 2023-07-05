"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.targetValidatorMiddleware = void 0;
const todo_validators_1 = require("../validators/todo-validators");
const types_1 = require("../types");
const targetValidatorMiddleware = (req, res, next) => {
    const target = (0, todo_validators_1.targetValidator)(req.body.target);
    if (target != req.body.target)
        res.status(types_1.Statuses.BadRequest).send({ message: target });
    else
        next();
};
exports.targetValidatorMiddleware = targetValidatorMiddleware;
