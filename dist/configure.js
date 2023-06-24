"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_ENV = exports.PORT = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const NODE_ENV = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : "development";
exports.NODE_ENV = NODE_ENV;
const setupEnv = () => {
    const envDir = path_1.default.join(__dirname, "./config/" + NODE_ENV + ".env");
    if (fs_1.default.existsSync(envDir)) {
        dotenv_1.default.config({ path: envDir });
    }
    else {
        dotenv_1.default.config();
    }
};
setupEnv();
const PORT = (_b = process.env.PORT) !== null && _b !== void 0 ? _b : "8080";
exports.PORT = PORT;
