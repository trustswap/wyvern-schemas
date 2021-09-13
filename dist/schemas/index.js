"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./main/index");
const index_2 = require("./rinkeby/index");
exports.schemas = {
    rinkeby: index_2.rinkebySchemas,
    main: index_1.mainSchemas,
    matic: index_1.mainSchemas,
    mumbai: index_2.rinkebySchemas
};
//# sourceMappingURL=index.js.map