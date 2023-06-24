"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const developmentLogger_1 = require("./developmentLogger");
const productionLogger_1 = require("./productionLogger");
const createLogger = () => {
    if (process.env.NODE_ENV === 'production') {
        console.log("Production Logger");
        return (0, productionLogger_1.createProductionLogger)();
    }
    return (0, developmentLogger_1.createDevelopmentLogger)();
};
const logger = createLogger();
exports.logger = logger;
