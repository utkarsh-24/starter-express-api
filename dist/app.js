"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configure_1 = require("./configure");
const logger_1 = require("./logger");
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("./routes");
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
require("express-async-errors");
const app = (0, express_1.default)();
process.on("uncaughtException", (ex) => {
    logger_1.logger.error(ex);
});
process.on("unhandledRejection", (ex) => {
    logger_1.logger.error(ex);
});
const setupDB = () => {
    var _a, _b;
    const DB_URL = (_a = process.env.DB_URL) !== null && _a !== void 0 ? _a : "";
    const DB_NAME = (_b = process.env.DB_NAME) !== null && _b !== void 0 ? _b : "development";
    mongoose_1.default.connect(DB_URL, { dbName: DB_NAME })
        .then(() => {
        logger_1.logger.info("Db connection established");
    })
        .catch((error) => {
        logger_1.logger.error("Error connecting to database " + error);
        process.exit(0);
    });
};
setupDB();
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests'
});
app.use(express_1.default.json());
app.use(limiter);
app.use((0, helmet_1.default)());
app.use("/todo", routes_1.todoRouter);
app.use((req, res) => {
    return res.status(404).send({ message: "Page not found" });
});
app.use((err, req, res, next) => {
    logger_1.logger.error(err);
    console.log(err);
    return res.send({ "message": "something went wrong" });
});
// app.use("exceptionsHandler", () => {
//     console.log("exceptionsHandler")
// })
// app.use("promiseHandler", () => {
//     console.log("promiseHandler")
// })
app.listen(configure_1.PORT, () => {
    console.log("server started " + configure_1.PORT);
    logger_1.logger.info("server started " + configure_1.PORT);
});
