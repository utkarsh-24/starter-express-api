"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = __importDefault(require("../controllers/todo"));
const router = (0, express_1.Router)();
router.post("/", todo_1.default.get);
router.get("/", (req, res) => {
    res.send("still working");
});
exports.default = router;
