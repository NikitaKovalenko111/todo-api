"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.targetValidator = void 0;
const targetValidator = (target) => {
    if (!target.trim())
        return "value is required!";
    else if (target.length > 20)
        return "value is more than 20 symbols!";
    return target;
};
exports.targetValidator = targetValidator;
