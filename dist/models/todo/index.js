"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = exports.TodoDay = void 0;
const enum_1 = require("./enum");
Object.defineProperty(exports, "TodoDay", { enumerable: true, get: function () { return enum_1.TodoDay; } });
const todo_1 = __importDefault(require("./todo"));
exports.Todo = todo_1.default;
