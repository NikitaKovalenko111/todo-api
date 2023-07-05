"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statuses = void 0;
var Statuses;
(function (Statuses) {
    Statuses[Statuses["GoodWithoutContent"] = 204] = "GoodWithoutContent";
    Statuses[Statuses["NotFound"] = 404] = "NotFound";
    Statuses[Statuses["Created"] = 201] = "Created";
    Statuses[Statuses["OK"] = 200] = "OK";
    Statuses[Statuses["BadRequest"] = 400] = "BadRequest";
})(Statuses || (exports.Statuses = Statuses = {}));
