"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDevelopmentLogger = void 0;
const winston_1 = __importDefault(require("winston"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const createDevelopmentLogger = () => {
    const devLogDir = path_1.default.join(__dirname, "../logs");
    if (!fs_1.default.existsSync(devLogDir)) {
        fs_1.default.mkdirSync(devLogDir);
    }
    const { combine, timestamp, printf, prettyPrint } = winston_1.default.format;
    const customFormat = printf(({ timestamp, level, message }) => {
        return `${timestamp} [${level}] ${message}`;
    });
    return winston_1.default.createLogger({
        level: "info",
        // format: combine(timestamp(), customFormat),
        format: combine(timestamp(), prettyPrint()),
        transports: [
            new winston_1.default.transports.File({ filename: path_1.default.join(devLogDir, "info.log") }),
            new winston_1.default.transports.File({ filename: path_1.default.join(devLogDir, "error.log"), level: "error" }),
        ]
    });
};
exports.createDevelopmentLogger = createDevelopmentLogger;
