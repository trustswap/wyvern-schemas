"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./main/index");
const index_2 = require("./matic/index");
const index_3 = require("./mumbai/index");
const index_4 = require("./rinkeby/index");
exports.tokens = {
    rinkeby: index_4.rinkebyTokens,
    main: index_1.mainTokens,
    matic: index_2.maticTokens,
    mumbai: index_3.mumbaiTokens
};
//# sourceMappingURL=index.js.map